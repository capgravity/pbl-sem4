import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login' // Import the Login component


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* Add the login route */}

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App