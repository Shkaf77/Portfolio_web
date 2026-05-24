import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Niroshi
      </NavLink>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar