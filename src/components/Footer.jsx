import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <p className="footer__brand">Pie Riot</p>
          <p className="footer__tag">Flavor without manners. Ships chilled overnight.</p>
        </div>
        <div>
          <p className="footer__heading">Explore</p>
          <Link to="/shop">All pies</Link>
          <Link to="/about">About the bakery</Link>
          <Link to="/poll">Rate your experience</Link>
        </div>
        <div>
          <p className="footer__heading">Account</p>
          <Link to="/profile">Shipping profile</Link>
          <Link to="/cart">Your cart</Link>
          <Link to="/report">Send feedback</Link>
        </div>
        <div>
          <p className="footer__heading">Notices</p>
          <Link to="/warning">Allergy warning</Link>
          <p className="footer__note">Baked daily in small batches. Best within 48 hours.</p>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Pie Riot Co. Keep your forks ready.</p>
    </footer>
  )
}
