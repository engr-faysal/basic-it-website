import SectionTitle from '../components/SectionTitle'
import { whyPoints, whySection } from '../data/siteData'

export default function WhyChoose() {
  return (
    <section className="section alt" id="why">
      <div className="container">
        <SectionTitle
          title={whySection.title}
          description={whySection.description}
        />
        <div className="why-list">
          {whyPoints.map((item, i) => (
            <div key={item.title} className="why-item">
              <span className="why-icon" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
