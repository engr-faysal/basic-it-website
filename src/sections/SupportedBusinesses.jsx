import SectionTitle from '../components/SectionTitle'
import {
  supportedPlaceholders,
  supportedSection,
} from '../data/siteData'

function SupportAvatar({ initials, tone }) {
  return (
    <span className={`support-avatar support-avatar--${tone}`} aria-hidden="true">
      {initials}
    </span>
  )
}

function MarqueeCard({ item }) {
  return (
    <article className="support-slide">
      <SupportAvatar initials={item.initials} tone={item.tone} />
      <div className="support-slide__text">
        <strong>{item.name}</strong>
        <span>{item.type}</span>
      </div>
    </article>
  )
}

export default function SupportedBusinesses() {
  const loopItems = [...supportedPlaceholders, ...supportedPlaceholders]

  return (
    <section className="section support-section" id="businesses-supported">
      <div className="container support-wrap">
        <div className="support-intro">
          <SectionTitle
            title={supportedSection.title}
            description={supportedSection.description}
          />
          <div className="support-stats" aria-label="Basic IT support summary">
            <div className="support-stat">
              <strong>20+</strong>
              <span>businesses supported</span>
            </div>
            <div className="support-stat">
              <strong>2019</strong>
              <span>established</span>
            </div>
          </div>
        </div>

        <div className="support-marquee-panel">
          <div className="support-marquee-head">
            <span className="support-marquee-badge">Client categories</span>
            <p>Businesses supported — not official partner claims</p>
          </div>

          <div className="support-marquee-viewport" aria-label="Business types supported by Basic IT">
            <div className="support-marquee-track">
              {loopItems.map((item, index) => (
                <MarqueeCard key={`${item.name}-a-${index}`} item={item} />
              ))}
              {loopItems.map((item, index) => (
                <MarqueeCard key={`${item.name}-b-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        <p className="support-note">{supportedSection.note}</p>
      </div>
    </section>
  )
}
