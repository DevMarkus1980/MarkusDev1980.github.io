import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
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
