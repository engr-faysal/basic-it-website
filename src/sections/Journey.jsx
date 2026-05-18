import SectionTitle from '../components/SectionTitle'
import { journeySection } from '../data/siteData'

export default function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="container">
        <SectionTitle
          title={journeySection.title}
          description={journeySection.intro}
        />
        <ol className="journey-timeline">
          {journeySection.milestones.map((m) => (
            <li key={m.period} className="journey-milestone">
              <span className="journey-period">{m.period}</span>
              <p className="journey-text">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
