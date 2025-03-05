import Hero from '../components/Hero'
import TestimonialCarousel from '../components/TestimonialCarousel'
import FeatureCards from '../components/FeatureCards'
import CTASection from '../components/CTASection'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TestimonialCarousel />
      <FeatureCards />
      <CTASection />
    </div>
  )
}

export default HomePage