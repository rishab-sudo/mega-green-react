import React from "react";
import "./HomeAbout.css";
import { FaCheckCircle } from "react-icons/fa"; // example icon

const HomeAbout = () => {
  return (
     <div>
    <section className="home-about">
      <div className="home-about-container">
        {/* Left Column */}
         <div className="home-about-left">
          <img
            src= {require("../assets/about us 01.png")}
            alt="About Us"
            className="about-img"
          />
        </div>
     
     {/* Right Column */}
          <div className="home-about-right">
            <div className="about-heading-div">

          <h2 className="about-heading">About Our Company</h2>
            </div>

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
      </div>
    </section>

    </div>
  );
};

export default HomeAbout;
