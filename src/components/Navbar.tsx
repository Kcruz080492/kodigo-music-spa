import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="brand">Kodigo Music</h1>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
