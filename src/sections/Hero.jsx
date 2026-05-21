import { hero } from '../data/siteData'
import { useTypewriter } from '../hooks/useTypewriter'

export default function Hero() {
  const typedText = useTypewriter(hero.typewriterPhrases)

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="hero-title-line">{hero.titleBefore}</span>
            <span className="hero-typewriter" aria-live="polite">
              <span className="hero-typewriter-text">{typedText}</span>
              <span className="hero-typewriter-cursor" aria-hidden="true" />
            </span>
            <span className="hero-title-line">{hero.titleAfter}</span>
          </h1>
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
