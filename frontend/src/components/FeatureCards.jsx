import { motion } from 'framer-motion'
import { FaRoute, FaChartLine, FaMapMarkedAlt, FaUsersCog } from 'react-icons/fa'

const features = [
  {
    id: 1,
    title: 'Intelligent Route Planning',
    description: 'Our advanced algorithms calculate the most efficient routes considering traffic, vehicle capacity, delivery windows, and more.',
    icon: <FaRoute className="text-4xl text-primary-500" />,
  },
  {
    id: 2,
    title: 'Real-time Analytics',
    description: 'Monitor your fleet performance with comprehensive dashboards and reports that help identify optimization opportunities.',
    icon: <FaChartLine className="text-4xl text-primary-500" />,
  },
  {
    id: 3,
    title: 'Interactive Mapping',
    description: 'Visualize routes on interactive maps with drag-and-drop functionality for manual adjustments when needed.',
    icon: <FaMapMarkedAlt className="text-4xl text-primary-500" />,
  },
  {
    id: 4,
    title: 'Team Collaboration',
    description: 'Enable seamless collaboration between dispatchers, drivers, and managers with role-based access and communication tools.',
    icon: <FaUsersCog className="text-4xl text-primary-500" />,
  },
]

const FeatureCards = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800">Powerful Features</h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you optimize every aspect of your transport operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card bg-white border border-secondary-200 rounded-lg p-6 shadow-sm hover:shadow-lg"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">{feature.title}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards