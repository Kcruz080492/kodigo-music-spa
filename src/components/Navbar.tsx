import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <nav className="navbar">
      <h1>Kodigo Music</h1>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={menuAbierto ? 'menu abierto' : 'menu'}>
        <li><Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>
        <li><Link to="/login" onClick={() => setMenuAbierto(false)}>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
