import { useState } from 'react'
import { FaTruck, FaRoute, FaMapMarkedAlt, FaChartBar, FaUsers, FaCog } from 'react-icons/fa'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-secondary-800 text-white p-4">
              <h2 className="text-xl font-bold mb-6">Dashboard</h2>
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-primary-600' : 'hover:bg-secondary-700'}`}
                >
                  <FaChartBar />
                  <span>Overview</span>
                </button>
                <button 
                  onClick={() => setActiveTab('routes')}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md ${activeTab === 'routes' ? 'bg-primary-600' : 'hover:bg-secondary-700'}`}
                >
                  <FaRoute />
                  <span>Routes</span>
                </button>
                <button 
                  onClick={() => setActiveTab('vehicles')}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md ${activeTab === 'vehicles' ? 'bg-primary-600' : 'hover:bg-secondary-700'}`}
                >
                  <FaTruck />
                  <span>Vehicles</span>
                </button>
                <button 
                  onClick={() => setActiveTab('map')}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md ${activeTab === 'map' ? 'bg-primary-600' : 'hover:bg-secondary-700'}`}
                >
                  <FaMapMarkedAlt />
                  <span>Map View</span>
                </button>
                <button 
                  onClick={() => setActiveTab('team')}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md ${activeTab === 'team' ? 'bg-primary-600' : 'hover:bg-secondary-700'}`}
                >
                  <FaUsers />
                  <span>Team</span>
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-md ${activeTab === 'settings' ? 'bg-primary-600' : 'hover:bg-secondary-700'}`}
                >
                  <FaCog />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
            
            {/* Main content */}
            <div className="flex-1 p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
                      <h3 className="text-lg font-semibold text-secondary-700 mb-2">Active Routes</h3>
                      <p className="text-3xl font-bold text-primary-600">24</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
                      <h3 className="text-lg font-semibold text-secondary-700 mb-2">Vehicles on Road</h3>
                      <p className="text-3xl font-bold text-primary-600">18</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
                      <h3 className="text-lg font-semibold text-secondary-700 mb-2">Deliveries Today</h3>
                      <p className="text-3xl font-bold text-primary-600">156</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border border-secondary-200 mb-8">
                    <h3 className="text-lg font-semibold text-secondary-700 mb-4">Route Efficiency</h3>
                    <div className="h-64 bg-secondary-100 rounded flex items-center justify-center">
                      <p className="text-secondary-500">Route efficiency chart will be displayed here</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
                    <h3 className="text-lg font-semibold text-secondary-700 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="border-b border-secondary-200 pb-3">
                        <p className="text-secondary-800">Route #1234 completed</p>
                        <p className="text-sm text-secondary-500">10 minutes ago</p>
                      </div>
                      <div className="border-b border-secondary-200 pb-3">
                        <p className="text-secondary-800">New delivery added to Route #5678</p>
                        <p className="text-sm text-secondary-500">25 minutes ago</p>
                      </div>
                      <div className="border-b border-secondary-200 pb-3">
                        <p className="text-secondary-800">Vehicle #12 reported delay</p>
                        <p className="text-sm text-secondary-500">1 hour ago</p>
                      </div>
                      <div>
                        <p className="text-secondary-800">Route optimization completed</p>
                        <p className="text-sm text-secondary-500">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'routes' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Routes</h2>
                  <p className="text-secondary-600 mb-4">Manage and optimize your delivery routes.</p>
                  <div className="bg-secondary-100 p-12 rounded-lg flex items-center justify-center">
                    <p className="text-secondary-500">Routes management interface will be displayed here</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'vehicles' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Vehicles</h2>
                  <p className="text-secondary-600 mb-4">Manage your fleet and vehicle assignments.</p>
                  <div className="bg-secondary-100 p-12 rounded-lg flex items-center justify-center">
                    <p className="text-secondary-500">Vehicle management interface will be displayed here</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'map' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Map View</h2>
                  <p className="text-secondary-600 mb-4">Interactive map of all active routes and vehicles.</p>
                  <div className="bg-secondary-100 p-12 rounded-lg flex items-center justify-center h-96">
                    <p className="text-secondary-500">Interactive map will be displayed here</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'team' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Team Management</h2>
                  <p className="text-secondary-600 mb-4">Manage drivers, dispatchers, and other team members.</p>
                  <div className="bg-secondary-100 p-12 rounded-lg flex items-center justify-center">
                    <p className="text-secondary-500">Team management interface will be displayed here</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Settings</h2>
                  <p className="text-secondary-600 mb-4">Configure your account and application preferences.</p>
                  <div className="bg-secondary-100 p-12 rounded-lg flex items-center justify-center">
                    <p className="text-secondary-500">Settings interface will be displayed here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard