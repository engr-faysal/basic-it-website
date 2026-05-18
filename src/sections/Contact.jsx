import { useState } from 'react'
import {
  contactSection,
  officialWebsiteUrl,
  socialLinks,
} from '../data/siteData'

export default function Contact() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(contactSection.formSuccess)
  }

  return (
    <section className="section alt contact-section" id="contact">
      <div className="container">
        <div className="section-head">
          <h2>{contactSection.title}</h2>
          <p>{contactSection.lead}</p>
        </div>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Phone or Email</span>
              <input name="contact" type="text" placeholder="Phone number or email address" />
            </label>
            <label>
              <span>Service Type</span>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {contactSection.serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what you want to build"
              />
            </label>
            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href={contactSection.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
              <button className="btn btn-secondary" type="submit">
                Send Message
              </button>
            </div>
            {message ? <p className="form-message">{message}</p> : null}
          </form>

          <aside className="contact-card" aria-label="Basic IT contact details">
            <p className="contact-card-label">Primary Contact</p>
            <h3>Chat on WhatsApp first</h3>
            <p className="contact-card-note">
              Share your website, software, digital setup, or product idea. Basic IT will reply with a practical next step.
            </p>
            <dl className="contact-details">
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={contactSection.whatsappUrl} target="_blank" rel="noreferrer">
                    {contactSection.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contactSection.email}`}>{contactSection.email}</a>
                </dd>
              </div>
              <div>
                <dt>Official Website</dt>
                <dd>
                  <a href={officialWebsiteUrl} target="_blank" rel="noreferrer">
                    {contactSection.domainLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{contactSection.location}</dd>
              </div>
            </dl>
            <div className="contact-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
            <a
              className="btn btn-primary contact-whatsapp-main"
              href={contactSection.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
