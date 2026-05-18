import { useEffect, useRef, useState } from 'react'
import { trustNumbers } from '../data/siteData'

function CountValue({ value, countTo, suffix = '', prefix = '', text }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!countTo || hasStarted) return undefined

    const element = ref.current
    if (!element) return undefined

    const startAnimation = () => {
      setHasStarted(true)
      const duration = 1200
      const startedAt = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.round(easedProgress * countTo))

        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    }

    if (!('IntersectionObserver' in window)) {
      startAnimation()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [countTo, hasStarted])

  if (!countTo) {
    return <strong ref={ref}>{text || value}</strong>
  }

  return (
    <strong ref={ref} aria-label={value}>
      {prefix}
      <span className="count-number">{displayValue}</span>
      {suffix}
    </strong>
  )
}

export default function TrustNumbers() {
  return (
    <section className="trust-strip" aria-label="Basic IT trust numbers">
      <div className="container trust-grid">
        {trustNumbers.map((item) => (
          <div key={item.label} className="trust-card">
            <CountValue {...item} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
