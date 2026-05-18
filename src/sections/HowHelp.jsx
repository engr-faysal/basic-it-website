import SectionTitle from '../components/SectionTitle'
import { helpCards, helpSection } from '../data/siteData'

export default function HowHelp() {
  return (
    <section className="section help-section" id="how-help">
      <div className="container">
        <SectionTitle title={helpSection.title} description={helpSection.description} />
        <div className="help-grid">
          {helpCards.map((item) => (
            <article key={item} className="help-card">
              <span aria-hidden="true">→</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
