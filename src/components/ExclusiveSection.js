import React from "react";
import { Container } from "react-bootstrap";
import "./ExclusiveSection.css";
import { FaCheckCircle } from "react-icons/fa";

const ExclusiveSection = () => {
  return (
    <section className="exclusive">
      <Container className="exclusive-container">
        {/* Left Side with Image */}
        <div className="exclusive-left">
          <img
            src= {require("../assets/image-86.png")}
            alt="Exclusive"
            className="exclusive-image"
          />
        </div>

        {/* Right Side with Content */}
        <div className="exclusive-right">
          <h2 className="exclusive-heading">Why Choose Us</h2>
          <p className="exclusive-description">
            We provide high-quality services that ensure customer satisfaction
            and trust. Our platform is built with performance, security, and
            innovation at its core.
          </p>

          {/* Key Points */}
          <div className="exclusive-points">
            <div className="exclusive-point">
              <FaCheckCircle className="point-icon" />
              <span>High Performance</span>
            </div>
            <div className="exclusive-point">
              <FaCheckCircle className="point-icon" />
              <span>Secure Platform</span>
            </div>
            <div className="exclusive-point">
              <FaCheckCircle className="point-icon" />
              <span>24/7 Support</span>
            </div>
            <div className="exclusive-point">
              <FaCheckCircle className="point-icon" />
              <span>Affordable Pricing</span>
            </div>
          </div>

          <button className="exclusive-btn">Learn More</button>
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveSection;
