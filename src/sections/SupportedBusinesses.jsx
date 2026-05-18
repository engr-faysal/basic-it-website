import SectionTitle from '../components/SectionTitle'
import {
  supportedPlaceholders,
  supportedSection,
} from '../data/siteData'

export default function SupportedBusinesses() {
  return (
    <section className="section alt supported-section" id="businesses-supported">
      <div className="container">
        <div className="supported-shell">
          <div className="supported-copy">
            <SectionTitle
              title={supportedSection.title}
              description={supportedSection.description}
            />
            <div className="supported-proof-card">
              <strong>20+</strong>
              <span>businesses supported through digital services</span>
            </div>
          </div>
          <div className="supported-grid" aria-label="Placeholder area for supported business logos">
            {supportedPlaceholders.map((item) => (
              <div key={item.name} className="supported-logo-placeholder">
                <span>{item.name.slice(0, 2).toUpperCase()}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.type}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="supported-note">{supportedSection.note}</p>
      </div>
    </section>
  )
}
