import React, { useState, useEffect } from 'react';
import GetQuotePopup from "../components/GetQuotePopup";
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIXED STATES
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 992) {
      setMenuOpen(prev => !prev);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <img className="logo" src={require("../assets/ff.png")} alt="Logo" />

          {/* ================= DESKTOP ================= */}
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
  <li><a href="/projects">Project</a></li>
            {/* 🔥 PROJECTS DROPDOWN */}
            {/* <li
              className="dropdown"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <span className="dropdown-toggle">
                Project 
              </span>

              <ul className={`dropdown-menu ${projectsDropdown ? "show" : ""}`}>
                <li><a href="/projects">Our Project</a></li>
                <li><a href="/project-highlight">Project Highlights</a></li>

              </ul> 
            </li> */}

            <li><a href="/FloorPlan">Floor Plans</a></li>
            {/* <li><a href="/gallery">Gallery</a></li> */}
            <li><a href="/contact">Contact Us</a></li>

            {/* ✅ FIXED BUTTON STRUCTURE */}
            <li>
              <button
                className="dealer-btn"
                onClick={() => setShowQuote(true)}
              >
                Get a Quote
              </button>
            </li>
          </ul>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <div className="side-menu-header">
            <img className="side-logo" src={require("../assets/megha-logo.png")} alt="Logo" />
          </div>

          <ul className="side-nav-links">
            <li><a href="/home" onClick={toggleMenu}>Home</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
 <li><a href="/projects">Project</a></li>
            {/* 🔥 MOBILE DROPDOWN */}
            {/* <li className="side-dropdown">
              <span
                className="side-about-title"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              >
                Project {mobileProjectsOpen ? "▲" : "▼"}
              </span>

              {mobileProjectsOpen && (
                <ul className="side-dropdown-menu">
                  <li><a href="/projects" onClick={toggleMenu}> Our Project</a></li>
                  <li><a href="/project-highlights" onClick={toggleMenu}>Project Highlights</a></li>

                </ul>
              )}
            </li> */}

            <li><a href="/FloorPlan" onClick={toggleMenu}>Floor Plans</a></li>
            {/* <li><a href="/gallery" onClick={toggleMenu}>Gallery</a></li> */}
            <li><a href="/contact" onClick={toggleMenu}>Contact Us</a></li>

            <li>
              <button
                className="dealer-btn"
                onClick={() => {
                  setShowQuote(true);
                  setMenuOpen(false);
                }}
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* POPUP */}
      <GetQuotePopup open={showQuote} onClose={() => setShowQuote(false)} />
    </>
  );
};

export default Navbar;