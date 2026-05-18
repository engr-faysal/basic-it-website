import {
  brandName,
  contactEmail,
  footerCopyright,
  footerDescription,
  footerLegalLinks,
  footerLinks,
  footerServicesSummary,
  officialDomain,
  officialWebsiteUrl,
  phoneNumber,
  socialLinks,
  locationText,
  whatsappUrl,
} from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo-link" aria-label="Basic IT home">
              <img src="/basic-it-logo.jpeg" alt="" className="footer-logo" />
              <span>{brandName}</span>
            </a>
            <p className="footer-description">{footerDescription}</p>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Contact</p>
            <div className="footer-contact-list">
              <a href={officialWebsiteUrl} target="_blank" rel="noreferrer">
                {officialDomain}
              </a>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp: {phoneNumber}
              </a>
              <span>{locationText}</span>
            </div>
          </div>

          <nav className="footer-column footer-links" aria-label="Quick links">
            <p className="footer-column-title">Quick Links</p>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            {footerLegalLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-column footer-services">
            <p className="footer-column-title">Services</p>
            <p className="footer-services-text">{footerServicesSummary}</p>
            <div className="footer-socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-legal" aria-label="Legal">
          <span>{footerCopyright} · Established in 2019 · {locationText}</span>
        </div>
      </div>
    </footer>
  )
}
