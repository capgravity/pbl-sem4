import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    reason: 'general',
    subject: '' // Added subject field
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      reason: 'general',
      subject: '' // Reset subject field
    })
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Have questions about RouteOptimizer? Our team is here to help you find the perfect solution for your transport needs.
          </p>
        </div>
      </div>
      
      {/* Contact information and form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaPhone className="text-primary-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-800">Phone</h3>
                  <p className="text-secondary-600">pbl1234</p>
                  <p className="text-secondary-600">Monday - Friday, 9am - 5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaEnvelope className="text-primary-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-800">Email</h3>
                  <p className="text-secondary-600">info@pblgroup.com</p>
                  <p className="text-secondary-600">support@pblgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-primary-600 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-secondary-800">Office</h3>
                  <p className="text-secondary-600">A1</p>
                  <p className="text-secondary-600">216</p>
                  <p className="text-secondary-600">PICT</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-secondary-700 mb-1">
                    Reason for Contact *
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact