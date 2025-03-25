import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTransition from './components/PageTransition'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login' // Import the Login component
import RandomMap from './components/RandomMap' // Add this import

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 1000); // 1-second transition
  };

  useEffect(() => {
    setIsLoading(false);
  }, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={
              <PageTransition key="home">
                <HomePage />
              </PageTransition>
            } />
            <Route path="/dashboard" element={
              <PageTransition key="dashboard">
                <Dashboard />
              </PageTransition>
            } />
            <Route path="/features" element={
              <PageTransition key="features">
                <Features />
              </PageTransition>
            } />
            <Route path="/pricing" element={
              <PageTransition key="pricing">
                <Pricing />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition key="contact">
                <Contact />
              </PageTransition>
            } />
            <Route path="/login" element={
              <PageTransition key="login">
                <Login />
              </PageTransition>
            } />
            <Route path="/map" element={<RandomMap />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App