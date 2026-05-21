import { useState } from 'react'
import { contactAltLinks, contactSection } from '../data/siteData'
import { submitContactInquiry } from '../utils/contactSubmit'

export default function Contact() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const preferred = data.get('preferred') || 'form'
    const payload = {
      name: data.get('name'),
      contact: data.get('contact'),
      service: data.get('service'),
      message: data.get('message'),
      preferred,
    }

    const method = submitContactInquiry(payload)
    setMessage(
      method === 'form' ? contactSection.formSuccessPage : contactSection.formSuccess
    )
    if (method === 'form') form.reset()
  }

  return (
    <section className="section alt contact-section" id="contact">
      <div className="container contact-container">
        <div className="section-head">
          <h2>{contactSection.title}</h2>
          <p>{contactSection.lead}</p>
        </div>

        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            <span>Phone or Email</span>
            <input
              name="contact"
              type="text"
              placeholder="Phone number or email address"
              required
            />
          </label>
          <label>
            <span>Service Type</span>
            <select name="service" defaultValue="" required>
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
            <span>How should we reply?</span>
            <select name="preferred" defaultValue="form" required>
              {contactSection.preferredContactOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what you want to build"
              required
            />
          </label>
          <div className="contact-actions">
            <button className="btn btn-primary" type="submit">
              Send inquiry
            </button>
          </div>
          {message ? (
            <p className="form-message" role="status">
              {message}
            </p>
          ) : null}

          <p className="contact-alt">
            <span>Or reach us directly:</span>
            {contactAltLinks.map((link, index) => (
              <span key={link.label}>
                {index > 0 ? (
                  <span className="contact-alt-sep" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </form>
      </div>
    </section>
  )
}
