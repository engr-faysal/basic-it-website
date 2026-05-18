import SectionTitle from '../components/SectionTitle'
import { products, productsSection } from '../data/siteData'

export default function Products() {
  return (
    <section className="section alt" id="products">
      <div className="container">
        <SectionTitle
          title={productsSection.title}
          description={productsSection.description}
        />
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <span className="product-badge">{product.badge}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul className="product-features">
                {product.features.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
