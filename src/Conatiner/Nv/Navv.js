import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Nv/Navb.css';

const Navv = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" style={{ position:'fixed',top:'0'}}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img  src='https://res.cloudinary.com/dlbp05ldk/image/upload/v1688283335/Red_and_Blue_Simple_Travel_Logo_wgafgr.png' alt='logo'/>
        </Link>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul ref={menuRef} className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/privecy" className="nav-link" onClick={() => setMenuOpen(false)}>
              Privacy Policy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guid" className="nav-link" onClick={() => setMenuOpen(false)}>
              Travel Guideline
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contect-us" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gelery" className="nav-link" onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/book" className="nav-link" onClick={() => setMenuOpen(false)}>
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navv;
