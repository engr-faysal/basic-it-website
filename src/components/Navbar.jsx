import { useState } from 'react'
import BrandLogo from './BrandLogo'
import { brandName, navCta, navLinks } from '../data/siteData'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = () => setNavOpen(false)

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="brand" onClick={closeNav} aria-label={`${brandName} home`}>
            <BrandLogo showName />
          </a>
          <div className="nav-actions">
            <nav className="nav-desktop" aria-label="Main">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              className="btn btn-primary nav-cta"
              href={navCta.href}
              target={navCta.external ? '_blank' : undefined}
              rel={navCta.external ? 'noreferrer' : undefined}
            >
              {navCta.label}
            </a>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="mobile-nav"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
        <nav
          id="mobile-nav"
          className={`nav-mobile${navOpen ? ' is-open' : ''}`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeNav}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary nav-cta-mobile"
            href={navCta.href}
            onClick={closeNav}
          >
            {navCta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
