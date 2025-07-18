import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Efecto para detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Si cambiamos a desktop, cerramos el menú móvil
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="brand">Kodigo Music</h1>
        
        {/* Menú para pantallas grandes - siempre visible */}
        <ul className={`nav-links ${isMobile ? 'mobile-hidden' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        </ul>
        
        {/* Botón hamburguesa solo para móviles */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Menú para móviles - aparece con animación */}
      {isMobile && (
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;