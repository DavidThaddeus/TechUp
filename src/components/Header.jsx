import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../TechUp images/logo.jpg';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const hamburgerBtnRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Focus the hamburger button when the menu is closed
      if (hamburgerBtnRef.current) {
        hamburgerBtnRef.current.focus();
      }
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="TechUp Logo" className="h-12 w-12 rounded-full object-cover mr-3" />
              <span className="text-xl font-bold text-white">TechUp</span>
            </Link>
            
            {/* Modern Mobile menu button */}
            <button 
              className="md:hidden text-white focus:outline-none hamburger-btn"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              ref={hamburgerBtnRef}
            >
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link to="/" className={`nav-link transition-all ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                <li><Link to="/about" className={`nav-link transition-all ${isActive('/about') ? 'active' : ''}`}>About</Link></li>
                <li><Link to="/initiatives" className={`nav-link transition-all ${isActive('/initiatives') ? 'active' : ''}`}>Initiatives</Link></li>
                <li><Link to="/impact" className={`nav-link transition-all ${isActive('/impact') ? 'active' : ''}`}>Impact</Link></li>
                <li><Link to="/join-us" className={`nav-link transition-all ${isActive('/join-us') ? 'active' : ''}`}>Join Us</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop blur overlay */}
      <div className={`backdrop-overlay ${isMenuOpen ? 'active' : ''}`}></div>

      {/* Mobile Navigation - Full screen glassmorphism */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <button
            className="close-btn"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="mobile-nav-list">
            <li><Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={toggleMenu}>About</Link></li>
            <li><Link to="/initiatives" className={`mobile-nav-link ${isActive('/initiatives') ? 'active' : ''}`} onClick={toggleMenu}>Initiatives</Link></li>
            <li><Link to="/impact" className={`mobile-nav-link ${isActive('/impact') ? 'active' : ''}`} onClick={toggleMenu}>Impact</Link></li>
            <li><Link to="/join-us" className={`mobile-nav-link ${isActive('/join-us') ? 'active' : ''}`} onClick={toggleMenu}>Join Us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
