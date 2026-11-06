import { Link, useParams } from 'react-router-dom'
import { formatPrice } from '../data/pies'

export default function Success() {
  const { orderId } = useParams()
  let order = null
  try {
    const raw = sessionStorage.getItem('pieriot-last-order')
    order = raw ? JSON.parse(raw) : null
  } catch {
    order = null
  }

  const matches = order && order.orderId === orderId

  return (
    <div className="page success">
      <div className="success__card">
        <p className="eyebrow">Order confirmed</p>
        <h1>Your pie riot is underway</h1>
        <p className="success__order">
          Order <strong>{orderId}</strong>
        </p>
        <p>
          We’re packing your pies with chilled cold packs for overnight delivery. A receipt is on
          its way to {matches ? order.shippingAddress.email || 'your inbox' : 'your inbox'}.
        </p>

        {matches && (
          <div className="success__summary">
            <p>
              Shipping to <strong>{order.shippingAddress.fullName}</strong> in{' '}
              {order.shippingAddress.city}, {order.shippingAddress.state}
            </p>
            <p>
              {order.items.length} line{order.items.length === 1 ? '' : 's'} ·{' '}
              {formatPrice(order.total)}
            </p>
          </div>
        )}

        <div className="hero__actions">
          <Link to="/shop" className="btn btn--primary">
            Order another pie
          </Link>
          <Link to="/poll" className="btn btn--secondary">
            Rate your experience
          </Link>
        </div>
      </div>
    </div>
  )
}
