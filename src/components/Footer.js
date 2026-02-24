import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-overlay">
     
          <Row className="footer-content-wrapper">
            {/* Left Column */}
            <Col lg={4} md={12} sm={12} className="footer-column-wrapper">
              <div className="footer-left">
                <img src={require("../assets/megha-logo.png")} alt="logo" className="footer-logo" />
                <div className="trust-text">
  <h2>Trust Built on Green Living and Premium Villas</h2>
  <p>
    Mega Green City offers thoughtfully designed, eco-friendly homes with quality construction and modern comfort.
  </p>
</div>
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?"><FaFacebook /></a>
                  <a href="https://www.linkedin.com/company/"><FaLinkedin /></a>
                  <a href="https://www.instagram.com//"><FaInstagram /></a>
                </div>
              </div>
            </Col>

            {/* Center Column - Quick Links */}
            <Col lg={3} md={6} sm={12} className="footer-column-wrapper">
              <div className="footer-column">
                <div className="col-text-div">
                  <h4>Quick Links</h4>
                  <div className="footer-links-column">
                    <a href="/home">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/product">Projects</a>
                    <a href="/contact">Contact Us</a>
                   
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column - Contact Info */}
            <Col lg={3} md={5} sm={12} className="footer-column-wrapper">
              <div className="footer-column">
                <div className="col-text-div">
                  <h4>Contact Info</h4>
                  <div className="footer-contact-info">
                    <p><strong>Address:</strong><br />xxxxxxxxxxxxxxxx,<br />Choupla Road, Civil Lines, Bareilly.</p>
                    <p><strong>Phone:</strong><br />
                      <a href="tel:+916396854974">+91 xxxxx xxxxx</a>
                    </p>
                    <p><strong>Email:</strong><br />
                      <a href="mailto:sales@alutuff.in">sales@xxxx.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
      
      </div>

      <div className='copyright-div'>
        Copyright © 2025 <span style={{ color: "#A1BE28" }}> MegaGreenCity</span>. All Right Reserved.
      </div>
    </Container>
  );
};

export default Footer;
