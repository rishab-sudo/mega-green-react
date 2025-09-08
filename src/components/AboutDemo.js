import React from "react";
import "./AboutDemo.css";

const AboutDemo = () => {
  return (
    <section className="aboutdemo-section">
      {/* Row 1: Image Left - Text Right */}
      <div className="aboutdemo-row">
        <div className="aboutdemo-img">
          <img src={require("../assets/images-hm.webp")} alt="About Us" />
        </div>
        <div className="aboutdemo-box">
          <h2>About Our Company</h2>
          <p>
            We provide the best services with a strong focus on quality
            and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left - Image Right */}
      <div className="aboutdemo-row">
        <div className="aboutdemo-box">
          <h2>Our Mission</h2>
          <p>
            To innovate and deliver solutions that make everyday life
            easier and better for everyone.
          </p>
        </div>
        <div className="aboutdemo-img demoabout">
          <img src={require("../assets/images-hm.webp")} alt="Our Mission" />
        </div>
      </div>
    </section>
  );
};

export default AboutDemo;
