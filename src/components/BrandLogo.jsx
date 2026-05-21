import { brandName, logoPath } from '../data/siteData'

export default function BrandLogo({ className = 'brand', showName = true }) {
  return (
    <>
      <img
        src={logoPath}
        alt=""
        className="brand-logo"
        width={showName ? 40 : 120}
        height={40}
      />
      {showName ? <span className="brand-name">{brandName}</span> : null}
    </>
  )
}
