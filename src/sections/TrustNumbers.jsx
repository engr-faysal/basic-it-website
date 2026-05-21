import { useEffect, useRef, useState } from 'react'
import { trustNumbers } from '../data/siteData'

function useCountUp(target, enabled, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled || target == null) return undefined

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, enabled, duration])

  return value
}

function TrustStat({ item }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(item.countTo, active && item.animate !== false)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setActive(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  let display = item.value
  if (active && item.countTo != null) {
    if (item.suffix === '+ Years') display = `${count}+ Years`
    else if (item.suffix === '+') display = `${count}+`
    else if (item.suffix === ' Products') display = `${count} Products`
    else if (item.suffix) display = `${count}${item.suffix}`
    else display = String(count)
  }

  return (
    <div ref={ref} className="trust-card">
      <strong>{display}</strong>
      <span>{item.label}</span>
    </div>
  )
}

export default function TrustNumbers() {
  return (
    <section className="trust-strip" aria-label="Basic IT trust numbers">
      <div className="container trust-grid">
        {trustNumbers.map((item) => (
          <TrustStat key={item.label} item={item} />
        ))}
      </div>
    </section>
  )
}
