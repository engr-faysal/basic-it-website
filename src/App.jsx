import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import TrustNumbers from './sections/TrustNumbers'
import About from './sections/About'
import Ecosystem from './sections/Ecosystem'
import Journey from './sections/Journey'
import Services from './sections/Services'
import HowHelp from './sections/HowHelp'
import WorkedWith from './sections/WorkedWith'
import SupportedBusinesses from './sections/SupportedBusinesses'
import Products from './sections/Products'
import WhyChoose from './sections/WhyChoose'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        [
          '.hero-grid > *',
          '.trust-card',
          '.section .section-head',
          '.card',
          '.journey-milestone',
          '.help-card',
          '.featured-work-card',
          '.worked-proof-badge',
          '.worked-list-panel',
          '.supported-proof-card',
          '.supported-logo-placeholder',
          '.product-card',
          '.why-item',
          '.cta-box',
          '.contact-form',
          '.contact-card',
          '.footer-main > *',
        ].join(', ')
      )
    )

    elements.forEach((element, index) => {
      element.classList.add('animate-on-scroll')
      element.style.setProperty('--reveal-delay', `${Math.min((index % 5) * 60, 240)}ms`)
    })

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <TrustNumbers />
        <About />
        <Ecosystem />
        <Journey />
        <Services />
        <HowHelp />
        <WorkedWith />
        <SupportedBusinesses />
        <Products />
        <WhyChoose />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
