import SectionTitle from '../components/SectionTitle'
import { featuredWork, workedWithItems, workedWithSection } from '../data/siteData'

export default function WorkedWith() {
  return (
    <section className="section worked-section" id="worked-with">
      <div className="container worked-container">
        <div className="worked-header-row">
          <SectionTitle
            title={workedWithSection.title}
            description={workedWithSection.description}
          />
          <div className="worked-stats" aria-label="Work summary">
            {workedWithSection.stats.map((stat) => (
              <div key={stat.label} className="worked-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="featured-work-grid" aria-label="Featured work and experience">
          {featuredWork.map((item) => (
            <article key={item.title} className="featured-work-card">
              <div className="featured-work-card-head">
                <span className="featured-work-index">{item.icon}</span>
                <span className={`featured-work-label featured-work-label--${item.type}`}>
                  {item.label}
                </span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {item.highlights ? (
                <ul className="featured-work-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}

              {item.chips ? (
                <div className="featured-work-chips" aria-label={`${item.title} areas`}>
                  {item.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="worked-list-panel">
          <div className="worked-list-copy">
            <span className="worked-list-eyebrow">Experience areas</span>
            <h3 className="worked-list-title">What Basic IT has worked with</h3>
            <p>
              Honest proof areas from website delivery, online business setup, education platforms,
              and SaaS product planning.
            </p>
          </div>
          <ul className="worked-grid">
            {workedWithItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
