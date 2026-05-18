import { hero } from '../data/siteData'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-lead">{hero.lead}</p>
          {hero.trustLine ? <p className="hero-trust">{hero.trustLine}</p> : null}
          <div className="hero-actions">
            {hero.actions.map((action) => (
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
        <aside className="hero-panel" aria-label={hero.panelTitle}>
          <h3>{hero.panelTitle}</h3>
          <ul>
            {hero.panelItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
