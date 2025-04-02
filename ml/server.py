from flask import Flask, jsonify, request
import googlemaps
from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp

app = Flask(__name__)

API_KEY = 'AIzaSyDMNGXTedPmpB0eTX3GVDQN_jgtF6Lp5E4'   
# NUM_VEHICLES = 2  # Number of delivery vehicles available
# DEPOT_INDEX = 0  # Starting point index in locations list

# locations = [
#     "Shaniwar Wada, Pune",  
#     "Dagdusheth Halwai Ganpati, Pune",
#     "Aga Khan Palace, Pune",
#     "Sinhagad Fort, Pune",
#     "Pataleshwar Cave Temple, Pune",
#     "Rajiv Gandhi Zoo, Pune",
#     "Pune Railway Station, Pune",
#     "Fergusson College, Pune"
# ]

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Flask server!"})

@app.route('/optimize', methods=['POST'])
def optimize():
    """Solve the VRP problem"""
    data = request.json
    num_vehicles = data["num_vehicles"]
    depot_index = data["depot_index"]
    locations = data["locations"]
    demands = data["demands"]
    vehicle_capacities = data["vehicle_capacities"]



    print(data)
    # Create time matrix
    time_matrix = create_time_matrix(locations)
    
    # Create routing index manager
    manager = pywrapcp.RoutingIndexManager(
        len(time_matrix), num_vehicles, depot_index)
    
    # Create routing model
    routing = pywrapcp.RoutingModel(manager)

    # Define cost function (travel time)
    def time_callback(from_index, to_index):
        from_node = manager.IndexToNode(from_index)
        to_node = manager.IndexToNode(to_index)
        return time_matrix[from_node][to_node]

    transit_callback_index = routing.RegisterTransitCallback(time_callback)
    routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

    def demand_callback(from_index):
        """Returns the demand of the node."""
        # Convert from routing variable Index to demands NodeIndex.
        from_node = manager.IndexToNode(from_index)
        return demands[from_node]
    
    demand_callback_index = routing.RegisterUnaryTransitCallback(demand_callback)
    routing.AddDimensionWithVehicleCapacity(
        demand_callback_index,
        0,  # null capacity slack
        data["vehicle_capacities"],  # vehicle maximum capacities
        True,  # start cumul to zero
        "Capacity",
    )

    # Add time constraint (optional)
    dimension_name = 'Time'
    routing.AddDimension(
        transit_callback_index,
        0,  # no slack
        86400,  # maximum time per vehicle (24 hours in seconds)
        True,  # start cumul to zero
        dimension_name)
    time_dimension = routing.GetDimensionOrDie(dimension_name)

    # Set search parameters
    search_parameters = pywrapcp.DefaultRoutingSearchParameters()
    search_parameters.first_solution_strategy = (
        routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)
    search_parameters.local_search_metaheuristic = (
        routing_enums_pb2.LocalSearchMetaheuristic.GUIDED_LOCAL_SEARCH)
    search_parameters.time_limit.FromSeconds(10)

    # Solve the problem
    solution = routing.SolveWithParameters(search_parameters)

    # Generate solution data
    if solution:
        solution_data = print_solution(manager, routing, solution, locations, num_vehicles,demands)
    else:
        solution_data = {"error": "No solution found!"}

    return jsonify(solution_data)


def create_time_matrix(locations):
    """Fetch travel times using Google Maps API"""
    gmaps = googlemaps.Client(key=API_KEY)
    matrix = gmaps.distance_matrix(
        origins=locations,
        destinations=locations,
        mode="driving",
        units="metric")
    
    time_matrix = []
    for row in matrix['rows']:
        row_times = []
        for element in row['elements']:
            row_times.append(element['duration']['value'] if element['status'] == 'OK' else 0)
        time_matrix.append(row_times)
    return time_matrix

def print_solution(manager, routing, solution, locations, num_vehicles,demands):
    """Generates solution data for response"""
    total_time = 0
    routes = []  # To store the routes for all vehicles
    for vehicle_id in range(num_vehicles):
        index = routing.Start(vehicle_id)
        route = []  # To store the route for the current vehicle
        route_time = 0
        total_weight = 0

        while not routing.IsEnd(index):
            node_index = manager.IndexToNode(index)
            route.append({
                "location": locations[node_index],
                "demand": demands[node_index]
            }) # Add location to the route
            previous_index = index
            index = solution.Value(routing.NextVar(index))
            route_time += routing.GetArcCostForVehicle(
                previous_index, index, vehicle_id)
            total_weight += demands[node_index]

        # Add the depot (end point) to the route
        route.append({"location":locations[manager.IndexToNode(index)],"demand": demands[0]})

        routes.append({
            "vehicle_id": vehicle_id,
            "route": route,
            "route_time_minutes": route_time // 60,
            "total_weight": total_weight
        })
        total_time += route_time

    # Return the total time and routes
    return {
        "total_time_minutes": total_time // 60,
        "routes": routes
    }

if __name__ == '__main__':
    app.run(debug=True)