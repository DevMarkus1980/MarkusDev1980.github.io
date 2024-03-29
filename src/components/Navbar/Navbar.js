import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Markus Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/contact">Contakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
