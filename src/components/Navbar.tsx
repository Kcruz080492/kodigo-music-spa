import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <h1>Kodigo Music</h1>

      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
      </button>

      {/* Menú de navegación */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
