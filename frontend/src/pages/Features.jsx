import { motion } from 'framer-motion'
import { FaRoute, FaChartLine, FaMapMarkedAlt, FaMobileAlt, FaCloudUploadAlt, FaUsersCog, FaBell, FaLock, FaFileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Intelligent Route Planning',
      description: 'Our advanced algorithms calculate the most efficient routes considering traffic, vehicle capacity, delivery windows, and more. Save up to 30% on fuel costs and reduce driving time by optimizing every route.',
      icon: <FaRoute className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Real-time Analytics',
      description: 'Monitor your fleet performance with comprehensive dashboards and reports that help identify optimization opportunities. Track key metrics like on-time delivery rates, fuel consumption, and driver performance.',
      icon: <FaChartLine className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Interactive Mapping',
      description: 'Visualize routes on interactive maps with drag-and-drop functionality for manual adjustments when needed. Get a bird\'s-eye view of your entire operation or zoom in to specific areas for detailed planning.',
      icon: <FaMapMarkedAlt className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    // {
    //   id: 4,
    //   title: 'Mobile Driver App',
    //   description: 'Equip your drivers with our user-friendly mobile app for navigation, delivery confirmation, and real-time updates. Enable seamless communication between drivers and dispatchers for maximum efficiency.',
    //   icon: <FaMobileAlt className="text-5xl text-primary-500" />,
    //   image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    // },
    // {
    //   id: 5,
    //   title: 'Cloud-based Platform',
    //   description: 'Access your route planning tools from anywhere with our secure, cloud-based platform that scales with your business. No need for expensive hardware or complex IT infrastructure.',
    //   icon: <FaCloudUploadAlt className="text-5xl text-primary-500" />,
    //   image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    // },
    {
      id: 6,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between dispatchers, drivers, and managers with role-based access and communication tools. Keep everyone on the same page with shared schedules and real-time updates.',
      icon: <FaUsersCog className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Notifications & Alerts',
      description: 'Stay informed with customizable notifications for delays, route changes, and other important events. Set up automated alerts for customers to keep them updated on delivery status.',
      icon: <FaBell className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Security & Compliance',
      description: 'Rest easy knowing your data is protected with enterprise-grade security. Our platform helps you maintain compliance with industry regulations and standards.',
      icon: <FaLock className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      title: 'Comprehensive Reporting',
      description: 'Generate detailed reports on all aspects of your transport operations. Export data in multiple formats for further analysis or integration with other business systems.',
      icon: <FaFileAlt className="text-5xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Powerful Features for Transport Optimization</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover the comprehensive suite of tools that make RouteOptimizer the leading solution for transport route planning and optimization.
          </p>
        </div>
      </div>
      
      {/* Features list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <div className="mb-4 flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 text-center md:text-left">{feature.title}</h2>
                <p className="text-lg text-secondary-600 text-center md:text-left">{feature.description}</p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-6">Ready to transform your transport operations?</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have optimized their routes, reduced costs, and improved customer satisfaction with RouteOptimizer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="px-8 py-3 bg-transparent border border-primary-600 text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors">
              Login/Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features