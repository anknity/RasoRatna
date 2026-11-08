import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import About from '../components/About'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Sectors from '../components/Sectors'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Ticker />
      <About />
      <Stats />
      <Services />
      <Sectors />
      <WhyUs />
      <Contact />
    </div>
  )
}

