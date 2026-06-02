import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="intro">Hi, I'm</p>

        <h1>Niroshi</h1>

        <p className="description">
          I create clean, simple and practical web applications.
        </p>

        <div className="buttons">
          <Link to="/skills" className="btn primary">
            View Skills
          </Link>

          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-avatar">
          <img src={avatar} alt="Niroshi avatar" />
        </div>

        <div className="hero-card-info">
          <p>Developer</p>
        </div>
      </div>
    </section>
  )
}

export default Hero