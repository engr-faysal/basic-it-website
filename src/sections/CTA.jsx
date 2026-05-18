import { ctaSection } from '../data/siteData'

export default function CTA() {
  return (
    <section className="cta" id="cta" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-box">
          <h2 id="cta-heading">{ctaSection.title}</h2>
          <p>{ctaSection.description}</p>
          <div className="cta-actions">
            {ctaSection.actions.map((action) => (
              <a
                key={action.href}
                className={`btn btn-${action.variant}`}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
