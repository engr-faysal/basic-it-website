import { trustNumbers } from '../data/siteData'

function TrustValue({ value }) {
  return <strong>{value}</strong>
}

export default function TrustNumbers() {
  return (
    <section className="trust-strip" aria-label="Basic IT trust numbers">
      <div className="container trust-grid">
        {trustNumbers.map((item) => (
          <div key={item.label} className="trust-card">
            <TrustValue value={item.value} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
