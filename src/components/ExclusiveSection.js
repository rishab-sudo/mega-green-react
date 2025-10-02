
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
           <div>   <FaCheckCircle className="about-icon" /></div>
            <div>
              <h4 className="about-subheading">Better Living</h4>
              <p className="about-desc">
          At Mega Group, our mission is clear: Better Living. 
          We are dedicated builders who work relentlessly to bring 
          the future closer to the present creating homes of exceptional quality, 
          enhancing neighbourhoods, and ensuring every project surpasses the last. 
          These values form the foundation on which our company stands.
              </p>
            </div>
          </div>

          {/* Subheading 2 */}
          <div className="about-subsection">
            <div>   <FaCheckCircle className="about-icon" /></div>
         
            <div>
              <h4 className="about-subheading">Enduring Assurance</h4>
              <p className="about-desc">
          Since our inception, we have honoured every commitment and will continue to do so. We believe a home is more than walls and roofs,it is where dreams are fulfilled and promises kept. Our goal is to see the satisfaction in every customer’s eyes, 
          knowing we have delivered both comfort and trust.
              </p>
<br/>
              <p>As we grow, we never lose sight of a simple truth: “The most valuable asset in any business is the attention and trust of its customers if you don’t earn it, someone else will.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default HomeAbout;
