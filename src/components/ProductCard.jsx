import { Link } from 'react-router-dom'
import PieVisual from './PieVisual'
import { formatPrice } from '../data/pies'

export default function ProductCard({ pie }) {
  return (
    <article className="product-card">
      <Link to={`/pie/${pie.slug}`} className="product-card__media">
        <PieVisual colors={pie.colors} view="hero" />
        {pie.badges?.[0] && <span className="product-card__badge">{pie.badges[0]}</span>}
      </Link>
      <div className="product-card__body">
        <p className="product-card__category">{pie.category}</p>
        <h3>
          <Link to={`/pie/${pie.slug}`}>{pie.name}</Link>
        </h3>
        <p className="product-card__tagline">{pie.tagline}</p>
        <div className="product-card__meta">
          <span className="product-card__price">{formatPrice(pie.price)}</span>
          <span className="product-card__rating" aria-label={`Rated ${pie.rating} out of 5`}>
            ★ {pie.rating}
          </span>
        </div>
        <Link to={`/pie/${pie.slug}`} className="btn btn--ghost btn--sm">
          View pie
        </Link>
      </div>
    </article>
  )
}
