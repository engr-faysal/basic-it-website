import SectionTitle from '../components/SectionTitle'
import { productsSection, saasProducts } from '../data/siteData'

export default function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <SectionTitle
          title={productsSection.title}
          description={productsSection.description}
        />
        <div className="saas-product-grid">
          {saasProducts.map((product) => (
            <article key={product.id} className="saas-product-card">
              <div className="saas-product-card__top">
                <span className="saas-product-badge">{product.badge}</span>
                <span className="saas-product-id" aria-hidden="true">
                  {product.id === 'sts' ? '01' : '02'}
                </span>
              </div>
              <h3>
                {product.name}
                <span className="saas-product-subtitle">{product.subtitle}</span>
              </h3>
              <p>{product.description}</p>
              <ul className="saas-product-features">
                {product.features.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <a className="saas-product-link" href="#contact">
                Ask about {product.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
