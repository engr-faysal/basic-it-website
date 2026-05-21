import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import TrustNumbers from './sections/TrustNumbers'
import Services from './sections/Services'
import Guidance from './sections/Guidance'
import WorkedWith from './sections/WorkedWith'
import SupportedBusinesses from './sections/SupportedBusinesses'
import Products from './sections/Products'
import WhyChoose from './sections/WhyChoose'
import Contact from './sections/Contact'

const SCROLL_TARGETS = [
  '.hero-grid > *',
  '.trust-card',
  '.section .section-head',
  '.card',
  '.guidance-panel',
  '.worked-header-row',
  '.worked-stat',
  '.featured-work-card',
  '.support-marquee-panel',
  '.support-slide',
  '.worked-list-panel',
  '.worked-grid li',
  '.saas-product-card',
  '.why-card',
  '.contact-form',
  '.footer-main > *',
].join(', ')

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(SCROLL_TARGETS))

    elements.forEach((element, index) => {
      element.classList.add('animate-on-scroll')
      element.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 70, 350)}ms`)
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustNumbers />
        <Services />
        <Guidance />
        <WorkedWith />
        <SupportedBusinesses />
        <Products />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
