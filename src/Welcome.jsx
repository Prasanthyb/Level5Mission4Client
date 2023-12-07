import React, { useState } from 'react';
import './CSS/Home.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Welcome = () => {
  // Extracting userId from the location state
  const location = useLocation();
  const userId = location.state?.id || '';

  // State for mobile menu visibility
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      {/* Header section */}
      <header className={`navbar ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
        <nav className="navbar">
          <a href="#" className="logo">
            <span className="logo-text">TURNERS</span>
          </a>

          {/* Navigation links */}
          <ul className="menu-links">
            <li><a href="#">Turners Business</a></li>
            <li><a href="#">Explore</a></li>
            <li className="join-btn"><Link to="/">Home</Link></li>
            <li><a href="#">Become a Customer</a></li>

            {/* Close mobile menu button */}
            <span id="close-menu-btn" className="material-symbols-outlined" onClick={closeMobileMenu}>close</span>
          </ul>

          {/* Hamburger menu button */}
          <span id="hamburger-btn" className="material-symbols-outlined" onClick={toggleMobileMenu}>menu</span>
        </nav>
      </header>

      {/* Hero section */}
      <section className="hero-section"
        style={{
          height: '75vh',
          backgroundImage: 'url("images/pexel3.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          display: 'flex',
          padding: '0 20px',
          alignItems: 'right'
        }}
      >
        <div className="content">

          {/* Welcome message */}
          <p style={{ color: "white", marginTop: "1px", fontSize: "60px" }}>
            Hello{' '} <span style={{ color: "red", marginTop: "70px", fontSize: "70px", fontStyle: "italic" }}> {userId}</span>{' '}
            <p> Welcome to Turners</p>
          </p>

          {/* Popular tags */}
          <div className="popular-tags" style={{ color: "white", marginTop: "240px", font: "20px" }}>
            Popular:
            <ul className="tags">
              <li><Link to="/list">Choose your Car</Link></li>
              <li><Link to="/insurance">Insurance Services</Link></li>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Emergency Services</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
