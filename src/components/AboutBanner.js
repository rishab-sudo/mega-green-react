import React from "react";
import { Container } from "react-bootstrap";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
        <Container fluid>
    <div className="about-banner">
      <div className="about-left">
        <h2 className="about-heading">Find Your Dream Property</h2>
        <p className="about-subheading">
          Explore the best properties with us at affordable prices.
        </p>

        {/* Info Box */}
      <div className="info-box">
  <div className="info-section">
    <span className="info-label">City/Street</span>
    <span className="info-value">New York City</span>
  </div>
  <div className="divider"></div>
  <div className="info-section">
    <span className="info-label">Property Type</span>
    <span className="info-value">Duplex House</span>
  </div>
  <div className="divider"></div>
  <div className="info-section">
    <span className="info-label">Price Range</span>
    <span className="info-value">$18,000 - $30,000</span>
  </div>
</div>


        {/* Stats */}
        <div className="stats">
          <div className="stat-item">
            <h3>30k+</h3>
            <p>Properties</p>
          </div>
          <div className="stat-item">
            <h3>8k+</h3>
            <p>Clients</p>
          </div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Views</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="about-right">
        <img
          src={require("../assets/mh-building.jpg")}
          alt="Property"
          className="about-img"
        />
      </div>
    </div>
      </Container>
  );
};

export default AboutBanner;
