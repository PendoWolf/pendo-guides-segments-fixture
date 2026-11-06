import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/warning', label: 'Warning' },
  { to: '/poll', label: 'Poll' },
  { to: '/report', label: 'Report' },
  { to: '/profile', label: 'Profile' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true" />
          <span className="navbar__name">Pie Riot</span>
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' is-active' : ''}${
                  link.to === '/warning' ? ' navbar__link--warn' : ''
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/cart" className="navbar__cart" onClick={() => setOpen(false)}>
            Cart
            {count > 0 && <span className="navbar__count">{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
