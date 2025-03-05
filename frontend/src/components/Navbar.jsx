import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import viteLogo from '../assets/react.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogin = () => {
    navigate('/login')
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={viteLogo} alt="Vite Logo" className="h-8 w-8 mr-2" /> {/* Add the Vite logo */}
              <span className="text-primary-600 font-bold text-xl">RouteOptimizer</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/features" className="px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium">Features</Link>
            <Link to="/contact" className="px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium">Contact</Link>
            <Link to="/dashboard" className="ml-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">Dashboard</Link>
            <button 
              onClick={handleLogin}
              className="ml-4 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Login
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="block px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/features" className="block px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={toggleMenu}>Features</Link>
            <Link to="/contact" className="block px-3 py-2 text-secondary-600 hover:text-primary-600 font-medium" onClick={toggleMenu}>Contact</Link>
            <Link to="/dashboard" className="block px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors" onClick={toggleMenu}>Dashboard</Link>
            <button 
              onClick={handleLogin}
              className="block w-full text-left px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar