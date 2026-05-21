import SectionTitle from '../components/SectionTitle'
import WhyIcon from '../components/WhyIcon'
import { whyPoints, whySection } from '../data/siteData'

export default function WhyChoose() {
  return (
    <section className="section alt why-section" id="why">
      <div className="container">
        <SectionTitle
          title={whySection.title}
          description={whySection.description}
        />
        <div className="why-grid">
          {whyPoints.map((item) => (
            <article key={item.title} className="why-card">
              <WhyIcon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
