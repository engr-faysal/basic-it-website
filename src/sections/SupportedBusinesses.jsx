import SectionTitle from '../components/SectionTitle'
import {
  supportedPlaceholders,
  supportedSection,
} from '../data/siteData'

export default function SupportedBusinesses() {
  const firstRow = [...supportedPlaceholders, ...supportedPlaceholders]
  const secondRow = [...supportedPlaceholders].reverse().concat([...supportedPlaceholders].reverse())

  return (
    <section className="section supportMarqueeSection" id="businesses-supported">
      <div className="container supportMarqueeContainer">
        <div className="supportMarqueeIntro">
          <SectionTitle
            title={supportedSection.title}
            description={supportedSection.description}
          />
          <div className="supportMarqueeStats" aria-label="Basic IT support summary">
            <div>
              <strong>20+</strong>
              <span>businesses supported</span>
            </div>
            <div>
              <strong>2019</strong>
              <span>established</span>
            </div>
          </div>
        </div>

        <div className="supportMarqueeBoard" aria-label="Logo-ready area for businesses supported by Basic IT">
          <div className="supportMarqueeBoardHead">
            <span>Logo-ready trust area</span>
            <strong>Businesses supported, not official partners</strong>
          </div>

          <div className="supportMarqueeLane" aria-hidden="true">
            <div className="supportMarqueeTrack">
              {firstRow.map((item, index) => (
                <div className="supportLogoCard" key={`${item.name}-top-${index}`}>
                  <img src="/basic-it-logo.jpeg" alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="supportMarqueeLane reverse" aria-hidden="true">
            <div className="supportMarqueeTrack">
              {secondRow.map((item, index) => (
                <div className="supportLogoCard compact" key={`${item.name}-bottom-${index}`}>
                  <img src="/basic-it-logo.jpeg" alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>Logo/card placeholder</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="supportMarqueeNote">{supportedSection.note}</p>
      </div>
    </section>
  )
}
