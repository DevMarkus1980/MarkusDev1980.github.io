import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Dein Logo</Link>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/about">Über uns</Link></li> 
        <li><Link to="/services">Dienstleistungen</Link></li> {/* Verwende Link statt <a> */}
        <li><Link to="/contact">Kontakt</Link></li> {/* Verwende Link statt <a> */}
      </ul>
    </nav>
  );
}

export default Navbar;
