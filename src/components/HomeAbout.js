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
              <div>
              <FaCheckCircle className="point-icon" />
              </div>
              <div>
      <p>Better Living</p>
              <p>At Mega Group, our mission is clear: Better Living. We are dedicated builders who work relentlessly to bring the future closer to the present creating homes of exceptional quality, enhancing neighbourhoods, 
                and ensuring every project surpasses the last. These values form the foundation on which our company stands.</p>
              </div>
            </div>

            <div className="exclusive-point">
              <div>   <FaCheckCircle className="point-icon" /></div>
           <div>
              <p>Enduring Assurance</p>
              <p>Since our inception, we have honoured every commitment and will continue to do so. We believe a home is more than walls and roofs,it is where dreams are fulfilled and promises kept. Our goal is to see the 
                satisfaction in every customer’s eyes, knowing we have delivered both comfort and trust.</p>
                </div>
            </div>
            
     
          </div>

          <button className="exclusive-btn">Learn More</button>
        </div>
      </Container>
    </section>
  );
};

export default ExclusiveSection;
