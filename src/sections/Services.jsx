import SectionTitle from '../components/SectionTitle'
import { services, servicesSection } from '../data/siteData'

export default function Services() {
  return (
    <section className="section alt" id="services">
      <div className="container">
        <SectionTitle
          title={servicesSection.title}
          description={servicesSection.description}
        />
        <div className="cards">
          {services.map((s) => (
            <article key={s.title} className="card">
              <span className="card-icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
