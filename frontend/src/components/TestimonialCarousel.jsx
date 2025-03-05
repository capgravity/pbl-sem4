import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Logistics Manager',
    company: 'Global Shipping Co.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: 'RouteOptimizer has transformed our delivery operations. We\'ve reduced fuel costs by 28% and improved on-time deliveries by 35%. The ROI has been incredible!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Fleet Director',
    company: 'Express Logistics',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'After implementing RouteOptimizer, we\'ve been able to handle 40% more deliveries with the same fleet size. The optimization algorithms are truly impressive.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    position: 'Operations Director',
    company: 'City Courier Services',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The real-time route adjustments have been a game-changer for our urban delivery service. Our drivers love the intuitive interface and our customers love the accurate ETAs.'
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'CEO',
    company: 'Regional Transport Ltd.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: 'We evaluated several route optimization solutions, and RouteOptimizer stood out for its ease of use and powerful features. The customer support has been exceptional.'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'Supply Chain Manager',
    company: 'Retail Distribution Inc.',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    quote: 'RouteOptimizer integrated seamlessly with our existing systems. We\'ve seen a dramatic improvement in our delivery metrics and significant cost savings.'
  }
]

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-800">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
            Discover how RouteOptimizer has helped businesses around the world optimize their transport operations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                  <div className="flex items-start mb-6">
                    <div className="mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-800">{testimonial.name}</h3>
                      <p className="text-secondary-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-primary-200 text-4xl absolute top-0 left-0" />
                    <p className="text-secondary-700 text-lg pl-10 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel