import SectionTitle from '../components/SectionTitle'
import { aboutSection } from '../data/siteData'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle
          title={aboutSection.title}
          description={aboutSection.description}
        />
      </div>
    </section>
  )
}
