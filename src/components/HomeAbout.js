import React from "react";
import "./HomeAbout.css";
import { FaCheckCircle } from "react-icons/fa"; // example icon

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">
        {/* Left Column */}
        <div className="home-about-left">
          <h2 className="about-heading">About Our Company</h2>

          {/* Subheading 1 */}
          <div className="about-subsection">
            <FaCheckCircle className="about-icon" />
            <div>
              <h4 className="about-subheading">Quality Products</h4>
              <p className="about-desc">
                We deliver the best quality products to our customers ensuring
                durability and reliability.
              </p>
            </div>
          </div>

          {/* Subheading 2 */}
          <div className="about-subsection">
            <FaCheckCircle className="about-icon" />
            <div>
              <h4 className="about-subheading">Customer Support</h4>
              <p className="about-desc">
                Our support team is always available to assist you with your
                queries and requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="home-about-right">
          <img
            src= {require("../assets/banner/room1.jpg")}
            alt="About Us"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
