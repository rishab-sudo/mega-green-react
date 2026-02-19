import React, { useState, useEffect } from 'react';

import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Mobile dropdowns
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);


const toggleMenu = () => {
  if (window.innerWidth < 992) {
    setMenuOpen(prev => !prev);
  }
};
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
  <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">
        <img className="logo" src={require("../assets/megha-logo.png")} alt="Logo" />

        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
 <li><a href="/about">About Us</a></li>
          {/* <li
            className="dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <span className="dropdown-toggle">About</span>
            <ul className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/established">Established Excellence</a></li>
            </ul>
          </li> */}

          {/* <li><a href="/product">Products</a></li> */}
          <li><a href="/projects" >Projects</a></li>
          {/* <li><a href="/career" onClick={toggleMenu}>Careers</a></li> */}

          {/* <li
            className="dropdown"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <span className="dropdown-toggle">More</span>
            <ul className={`dropdown-menu ${moreDropdownOpen ? 'show' : ''}`}>
                 <li><a href="/catalogues">Catalogues</a></li>
              <li><a href="/News">News & Events</a></li>
              <li><a href="/testReport">Test Reports</a></li>
              <li><a href="/certificates">Certificates</a></li>
            </ul>
          </li> */}

        
          <li><a href="/contact">Contact Us</a></li>
          {/* Desktop Become A Dealer Button  */}
           <li>
<a href="/dealer" className="dealer-btn desktop-only">Get a Quote</a>
</li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <img className="side-logo" src={require("../assets/footer_logo.png")} alt="Logo" />
        </div>

        <ul className="side-nav-links">
          <li><a href="/home" onClick={toggleMenu}>Home</a></li>

          {/* Mobile About Dropdown */}
          <li className="side-dropdown">
            <span
              className="side-about-title"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              About {mobileAboutOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {mobileAboutOpen && (
              <ul className="side-dropdown-menu">
                <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
                {/* <li><a href="/established" onClick={toggleMenu}>Established Excellence</a></li> */}
              </ul>
            )}
          </li>

         <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>

          {/* Mobile More Dropdown */}
          <li className="side-dropdown">
            <span
              className="side-about-title"
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              More {mobileMoreOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {mobileMoreOpen && (
              <ul className="side-dropdown-menu">
               <li><a href="/catalogues" onClick={toggleMenu}>Catalogues</a></li>
                <li><a href="/news" onClick={toggleMenu}>News & Events</a></li>
                <li><a href="/testReport" onClick={toggleMenu}>Test Reports</a></li>
                <li><a href="/certificates" onClick={toggleMenu}>Certificates</a></li>
              </ul>
            )}
          </li>

          
          <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>
          {/* Mobile Become A Dealer Link */}
<li><a href="/dealer" onClick={toggleMenu}>Become A Dealer</a> </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
