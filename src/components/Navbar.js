import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const location = useLocation();

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='burger-menu' onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
                <nav className={menuOpen ? "menu-open" : ""}>
                    <ul>
                        <li className={`li1 ${location.pathname === "/" ? "active" : ""}`}>
                            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className={`li3 ${location.pathname === "/projects" ? "active" : ""}`}>
                            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projets</Link></li>
                        <li className={`li4 ${location.pathname === "/create-space" ? "active" : ""}`}>
                            <Link to="/create-space" onClick={() => setMenuOpen(false)}>Créer ton espace</Link></li>
                        <li className="li2">
                            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav> 
                {menuOpen && (
                    <div className="mobile-menu">
                        <button className="close-btn" onClick={() => setMenuOpen(false)}>✖</button>
                        <ul>
                            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projets</Link></li>
                            <li><Link to="/create-space" onClick={() => setMenuOpen(false)}>Créer ton espace</Link></li>
                            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
  }
  
  export default Navbar;
  