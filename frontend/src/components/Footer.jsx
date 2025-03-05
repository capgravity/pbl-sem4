import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RouteOptimizer</h3>
            <p className="text-secondary-300">
              Optimizing transport routes for businesses worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-secondary-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-300 hover:text-white">Home</Link></li>
              <li><Link to="/features" className="text-secondary-300 hover:text-white">Features</Link></li>
              <li><Link to="/contact" className="text-secondary-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white">API</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-secondary-300">
              <p>A1 216</p>
              <p>PICT</p>
              <p className="mt-2">Email: info@pbl.com</p>
              <p>Phone: pbl1234</p>
            </address>
          </div>
        </div>
        
        
      </div>
    </footer>
  )
}

export default Footer