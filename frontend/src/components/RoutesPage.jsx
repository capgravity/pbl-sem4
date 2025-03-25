import { useState,useEffect } from 'react'
import axios from 'axios'

const RoutesPage = ({ onPlotRoute }) => {
  const [routes, setRoutes] = useState([]) // Store multiple routes
  const [activeRouteIndex, setActiveRouteIndex] = useState(null) // Track the active route for editing
  const [stops, setStops] = useState([]) // Store stops fetched from the API
  const [isLoading, setIsLoading] = useState(true) // Loading state for fetching stops
    
    console.log(stops)
  // Fetch stops from the API using axios
  useEffect(() => {
    const fetchStops = async () => {
      try {
        const response = await axios.get('https://skilled-moth-greatly.ngrok-free.app/api/stops') // Replace with your API endpoint
        setStops(response.data) // Assume the API returns an array of stops
      } catch (error) {
        console.error('Error fetching stops:', error)
      } finally {
        setIsLoading(false) // Stop loading once the request is complete
      }
    }

    fetchStops()
  }, [])
  const handleAddRoute = () => {
    setRoutes([...routes, { start: '', end: '', waypoints: [] }]) // Add a new empty route
  }

  const handleUpdateRoute = (index, field, value) => {
    const updatedRoutes = [...routes]
    updatedRoutes[index][field] = value
    setRoutes(updatedRoutes)
  }

  const handlePlotRoute = (index) => {
    const routeData = routes[index]
    onPlotRoute(routeData) // Send the selected route to the backend
    console.log('Route data sent to backend:', routeData)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-secondary-800 mb-6">Manage Routes</h2>

        {/* Add Route Button */}
        <button
          onClick={handleAddRoute}
          className="mb-6 px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
        >
          Add Route
        </button>

        {/* List of Routes */}
        <div className="space-y-4">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`p-4 border rounded-md ${activeRouteIndex === index ? 'border-primary-600' : 'border-secondary-300'}`}
            >
              <div
                onClick={() => setActiveRouteIndex(index)}
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-secondary-700">
                  Route {index + 1}
                </h3>
                <span className="text-primary-600">Edit</span>
              </div>

              {/* Selection Box for Active Route */}
              {activeRouteIndex === index && (
                <div className="mt-4 space-y-4">
                  {/* Start Point Dropdown */}
                  <div>
                    <label htmlFor={`start-${index}`} className="block text-sm font-medium text-secondary-700 mb-2">
                      Start Point
                    </label>
                    <select
                      id={`start-${index}`}
                      value={route.start}
                      onChange={(e) => handleUpdateRoute(index, 'start', e.target.value)}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select Start Point</option>
                      <option value="Narela Terminal">Narela Terminal</option>
                      <option value="Police Station Narela">Police Station Narela</option>
                      <option value="Saffiyabad Crossing">Saffiyabad Crossing</option>
                    </select>
                  </div>

                  {/* End Point Dropdown */}
                  <div>
                    <label htmlFor={`end-${index}`} className="block text-sm font-medium text-secondary-700 mb-2">
                      End Point
                    </label>
                    <select
                      id={`end-${index}`}
                      value={route.end}
                      onChange={(e) => handleUpdateRoute(index, 'end', e.target.value)}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select End Point</option>
                      <option value="CPJ College">CPJ College</option>                      <option value="Location Y">Location Y</option>
                      <option value="Raja Harish Chandra Hospital">Raja Harish Chandra Hospital</option>
                    </select>
                  </div>

                  {/* Waypoints Input */}
                  <div>
                    <label htmlFor={`waypoints-${index}`} className="block text-sm font-medium text-secondary-700 mb-2">
                      Waypoints (Comma-separated)
                    </label>
                    <input
                      id={`waypoints-${index}`}
                      type="text"
                      value={route.waypoints.join(',')}
                      onChange={(e) => handleUpdateRoute(index, 'waypoints', e.target.value.split(','))}
                      placeholder="Enter waypoints (e.g., Stop1, Stop2)"
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  {/* Go Button */}
                  <button
                    onClick={() => handlePlotRoute(index)}
                    className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Go
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoutesPage