import { useState } from 'react'
import { brandName, navLinks } from '../data/siteData'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = () => setNavOpen(false)

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="brand" onClick={closeNav}>
            <img src="/basic-it-logo.jpeg" alt="" className="brand-logo" />
            <span>{brandName}</span>
          </a>
          <nav className="nav-desktop" aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
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
        </nav>
      </div>
    </header>
  )
}
