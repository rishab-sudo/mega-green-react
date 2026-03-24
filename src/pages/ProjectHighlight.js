import React from "react";
import "./ProjectHighlight.css";

// IMPORT IMAGES (apne folder se)
import entrance from "../assets/amenties/facility-1.jpeg";
import gym from "../assets/amenties/facility-1.jpeg";
import pool from "../assets/amenties/facility-1.jpeg";
import cafe from "../assets/amenties/facility-1.jpeg";
import kids from "../assets/amenties/facility-1.jpeg";
import yoga from "../assets/amenties/facility-1.jpeg";
import jogging from "../assets/amenties/facility-1.jpeg";
import pergola from "../assets/amenties/facility-1.jpeg";
import openGym from "../assets/amenties/facility-1.jpeg";
import pickle from "../assets/amenties/facility-1.jpeg";
import tennis from "../assets/amenties/facility-1.jpeg";
import basketball from "../assets/amenties/facility-1.jpeg";
import water from "../assets/amenties/facility-1.jpeg";
import school from "../assets/amenties/facility-1.jpeg";
import { Container } from "react-bootstrap";

const highlights = [
  { title: "WELCOMING ENTRANCE", img: entrance },
  { title: "GYM", img: gym },
  { title: "SWIMMING POOL", img: pool },
  { title: "CAFE", img: cafe },
  { title: "KIDS PLAY ZONE", img: kids },
  { title: "YOGA/MEDITATION ZONE", img: yoga },
  { title: "JOGGING TRACKS", img: jogging },
  { title: "SEATING PERGOLAS", img: pergola },
  { title: "OPEN AIR GYM", img: openGym },
  { title: "PICKLE BALL COURT", img: pickle },
  { title: "TENNIS COURT", img: tennis },
  { title: "HALF BASKETBALL COURT", img: basketball },
  { title: "WATERBODIES & FOUNTAINS", img: water },
  { title: "JUNIOR HIGH SCHOOL", img: school },
];

const ProjectHighlight = () => {
  return (
    <>
      {/* Banner */}
      <div className="gallery-banner">
        <div className="gallery-overlay">
          <h1>Project Highlights</h1>
          <div className="line-container">
            <div className="moving-line"></div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <Container className="project-highlight-section">

         <div className="project-highlight-heading-div ">
          <h1 className="page-heading heading-center-underline">dcbdavdjvjdf</h1>
          <p className="page-description">The villa offers dedicated car parking, a spacious drawing and dining area for memorable gatherings, and a well-planned kitchen that supports everyday ease. Thoughtfully designed bedrooms provide privacy and relaxation, while a separate study room creates the perfect space for focus and productivity. Conveniently placed toilets and a practical store and dress area enhance functionality and organized living.</p>
        </div>

        <div className="project-highlight-container">

          {highlights.map((item, index) => (
            <div className="project-highlight-card" key={index}>
              
              <div className="project-highlight-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="project-highlight-text">
                <h4>{item.title}</h4>
                 <span className="highlight-tick"></span>
              </div>

            </div>
          ))}

        </div>
      </Container>
    </>
  );
};

export default ProjectHighlight;