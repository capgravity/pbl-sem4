import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const [annual, setAnnual] = useState(true)
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses with basic route planning needs',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Up to 5 vehicles',
        'Basic route optimization',
        'Daily route planning',
        'Email support',
        'Mobile app access',
        '5 user accounts'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced optimization needs',
      monthlyPrice: 99,
      annualPrice: 79,
      popular: true,
      features: [
        'Up to 20 vehicles',
        'Advanced route optimization',
        'Real-time tracking',
        'Priority support',
        'API access',
        'Analytics dashboard',
        'Unlimited user accounts'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large fleets and complex operations',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Unlimited vehicles',
        'Premium route optimization',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'White-label options',
        'SLA guarantees',
        'Custom reporting'
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core route optimization technology.
          </p>
        </div>
      </div>
      
      {/* Pricing toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-lg ${annual ? 'text-secondary-500' : 'text-secondary-800 font-semibold'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)} 
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-primary-600"
          >
            <span className="sr-only">Toggle billing frequency</span>
            <span 
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${annual ? 'translate-x-9' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-lg ${annual ? 'text-secondary-800 font-semibold' : 'text-secondary-500'}`}>
            Annual <span className="text-primary-600 font-medium">(Save 20%)</span>
          </span>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`rounded-lg overflow-hidden border ${plan.popular ? 'border-primary-500 shadow-lg' : 'border-secondary-200 shadow'}`}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-secondary-800">{plan.name}</h2>
                <p className="text-secondary-600 mt-2 h-12">{plan.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-secondary-800">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-secondary-600">/month</span>
                </div>
                {annual && (
                  <p className="text-sm text-primary-600 mt-1">Billed annually</p>
                )}
                <Link
                  to="/dashboard"
                  className={`mt-6 block w-full py-3 px-4 rounded-md text-center font-medium ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
                  } transition-colors`}
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="bg-secondary-50 px-6 py-8">
                <h3 className="text-lg font-semibold text-secondary-800 mb-4">What's included:</h3>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <FaCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="bg-secondary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Can I change plans later?</h3>
              <p className="text-secondary-600">Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Is there a free trial?</h3>
              <p className="text-secondary-600">Yes, we offer a 14-day free trial on all plans. No credit card required to start.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-secondary-600">We accept all major credit cards, as well as PayPal. For Enterprise plans, we can also arrange invoicing.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Can I get a custom plan for my specific needs?</h3>
              <p className="text-secondary-600">Absolutely! Contact our sales team to discuss your requirements and we'll create a custom solution for your business.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Is there a long-term contract?</h3>
              <p className="text-secondary-600">No, all plans are month-to-month or annual with no long-term commitment. You can cancel at any time.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-6">Still have questions?</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
            Our team is ready to help you find the perfect solution for your transport route optimization needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
              Contact Sales
            </Link>
            <a href="tel:+15551234567" className="px-8 py-3 bg-white text-primary-700 border border-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors">
              Call Us: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing