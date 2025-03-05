import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="bg-primary-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Transport Routes?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of businesses that have transformed their logistics operations with RouteOptimizer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/login" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-primary-600 transition-colors">
            Login/Signup
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection