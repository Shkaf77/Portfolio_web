import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found">
      <p className="section-label">404</p>

      <h1>Page not found</h1>

      <p>
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="btn primary">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound