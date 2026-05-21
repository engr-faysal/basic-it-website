import { guidanceSection, helpCards } from '../data/siteData'

export default function Guidance() {
  return (
    <section className="guidance" id="guidance" aria-labelledby="guidance-heading">
      <div className="container">
        <div className="guidance-panel">
          <div className="guidance-copy">
            <h2 id="guidance-heading">{guidanceSection.title}</h2>
            <p>{guidanceSection.description}</p>
            <a className="btn btn-primary" href={guidanceSection.actions[0].href}>
              {guidanceSection.actions[0].label}
            </a>
          </div>

          <div className="guidance-goals">
            <p className="guidance-goals-label">{guidanceSection.goalsLabel}</p>
            <ul className="guidance-goals-list">
              {helpCards.map((goal) => (
                <li key={goal}>
                  <a href="#contact">{goal}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
