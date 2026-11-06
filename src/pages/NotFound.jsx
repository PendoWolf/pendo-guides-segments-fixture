import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page empty-state">
      <h1>404 — pie not found</h1>
      <p>This slice wandered off the cooling rack.</p>
      <Link to="/" className="btn btn--primary">
        Back home
      </Link>
    </div>
  )
}
