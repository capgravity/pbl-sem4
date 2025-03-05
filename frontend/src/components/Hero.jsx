import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Optimize Your Transport Routes for Maximum Efficiency
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-100">
              Save time, reduce costs, and improve customer satisfaction with our advanced route optimization platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors text-center">
                Get Started
              </Link>
              <Link to="/features" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-primary-700 transition-colors text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Transport route optimization" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero