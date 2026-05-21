import BrandLogo from './BrandLogo'
import {
  brandName,
  contactEmail,
  footerCopyright,
  footerDescription,
  footerLegalLinks,
  footerLinks,
  footerServicesSummary,
  locationText,
  phoneNumber,
  socialLinks,
} from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo-link" aria-label={`${brandName} home`}>
              <BrandLogo showName />
            </a>
            <p className="footer-description">{footerDescription}</p>
            <p className="footer-tagline">Established 2019</p>
          </div>

          <div className="footer-column footer-contact">
            <p className="footer-column-title">Contact</p>
            <span className="footer-location">{locationText}</span>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <div className="footer-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-column footer-links" aria-label="Quick links">
            <p className="footer-column-title">Explore</p>
            <ul className="footer-link-grid">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column footer-services">
            <p className="footer-column-title">Services</p>
            <p className="footer-services-text">{footerServicesSummary}</p>
          </div>
        </div>

        <div className="footer-legal" aria-label="Legal">
          <span>{footerCopyright}</span>
          {footerLegalLinks.map((item) => (
            <span key={item.href} className="footer-legal-item">
              <span className="footer-legal-sep" aria-hidden="true">
                ·
              </span>
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
          <span className="footer-legal-item">
            <span className="footer-legal-sep" aria-hidden="true">
              ·
            </span>
            <span>Developed by Basic IT</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
