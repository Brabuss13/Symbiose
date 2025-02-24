import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <nav>
                    <ul>
                        <li className={`li1 ${location.pathname === "/" ? "active" : ""}`}><Link to="/">Home</Link></li>
                        <li className={`li3 ${location.pathname === "/projects" ? "active" : ""}`}><Link to="/projects">Projets</Link></li>
                        <li className={`li4 ${location.pathname === "/create-space" ? "active" : ""}`}><Link to="/create-space">Créer ton espace</Link></li>
                        <li className="li2"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  