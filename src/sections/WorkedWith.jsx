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
          <div className="worked-proof-badge" aria-label="Basic IT work proof summary">
            <span>Practical proof</span>
            <strong>Website · Business setup · Product direction</strong>
          </div>
        </div>

        <div className="featured-work-grid" aria-label="Featured work and experience">
          {featuredWork.map((item) => (
            <article key={item.title} className="featured-work-card">
              <div className="featured-work-card-head">
                <span className="featured-work-index">{item.icon}</span>
                <span className="featured-work-label">{item.label}</span>
              </div>

              <div className="featured-work-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              {item.scope ? (
                <div className="featured-work-tags" aria-label={`${item.title} scope`}>
                  {item.scope.map((scopeItem) => (
                    <span key={scopeItem}>{scopeItem}</span>
                  ))}
                </div>
              ) : null}

              <div className="featured-work-footer">
                {item.meta ? <small>{item.meta}</small> : null}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    View live example
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="worked-list-panel">
          <div className="worked-list-copy">
            <span>Experience areas</span>
            <h3 className="worked-list-title">What Basic IT has worked with</h3>
            <p>Short, honest proof areas from service work, online setup, website planning, and product direction.</p>
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
