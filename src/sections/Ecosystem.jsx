import SectionTitle from '../components/SectionTitle'
import { ecosystemItems, ecosystemSection } from '../data/siteData'

export default function Ecosystem() {
  return (
    <section className="section alt" id="ecosystem">
      <div className="container">
        <SectionTitle
          title={ecosystemSection.title}
          description={ecosystemSection.description}
        />
        <div className="cards ecosystem-cards">
          {ecosystemItems.map((item) => (
            <article key={item.title} className="card ecosystem-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
