import React from "react";
import { FaBed, FaBath, FaCar, FaCouch, FaTree, FaWifi } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "./ProjectsPage.css";
import Products from "../components/Products";
import ProjectPageBanner from "../components/ProjectPageBanner";

const Projects = () => {
  return (
    <>
    <ProjectPageBanner/>
      {/* First Section */}
      <div className="projects-section">
        {/* Left Side */}
        <div className="projects-left">
          <img
            src={require("../assets/projects/image-65.png")}
            alt="Main Project"
            className="projects-main-img"
          />

          {/* Text under image */}
          <div className="projects-left-info">
            <h3 className="projects-price">$420.00 / per day</h3>
            <h4 className="projects-title">Door to your a the new home</h4>
            <p className="projects-subtitile">
              66 Broklyant, New York America
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="projects-right">
          <div className="projects-right-top">
            <img
              src={require("../assets/projects/image-71.png")}
              alt="Small Project"
              className="projects-sub-img"
            />
          </div>

          <div className="projects-right-bottom">
            <h2 className="projects-heading">Our Categories</h2>
            <ul className="projects-points">
              <li>High Quality Materials</li>
              <li>Modern Architecture</li>
              <li>Eco-friendly Designs</li>
              <li>Luxury Amenities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="project-detail-section">
        {/* Left Side */}
        <div className="project-detail-left">
          <div className="project-detail-boxes">
            {/* Row 1 */}
            <div className="project-detail-row">
              <div className="project-detail-box">
                <FaBed className="project-detail-icon" />
                <div className="project-detail-text">
                  <h5>Room</h5>
                  <p>4 Rooms</p>
                </div>
              </div>
              <div className="project-detail-box">
                <FaBath className="project-detail-icon" />
                <div className="project-detail-text">
                  <h5>Bathroom</h5>
                  <p>2 Baths</p>
                </div>
              </div>
              <div className="project-detail-box">
                <FaCar className="project-detail-icon" />
                <div className="project-detail-text">
                  <h5>Garage</h5>
                  <p>1 Space</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="project-detail-row">
              <div className="project-detail-box">
                <FaCouch className="project-detail-icon" />
                <div className="project-detail-text">
                  <h5>Living</h5>
                  <p>2 Halls</p>
                </div>
              </div>
              <div className="project-detail-box">
                <FaTree className="project-detail-icon" />
                <div className="project-detail-text">
                  <h5>Garden</h5>
                  <p>Big Yard</p>
                </div>
              </div>
              <div className="project-detail-box">
                <FaWifi className="project-detail-icon" />
                <div className="project-detail-text">
                  <h5>Wifi</h5>
                  <p>Free Access</p>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Right Side */}
        <div className="project-detail-right">
          <div className="project-detail-info-box">
            <ul>
              <li>
                <span className="project-detail-point">✔</span>
                <span className="project-detail-subheading">Prime Location</span>
              </li>
              <li>
                <span className="project-detail-point">✔</span>
                <span className="project-detail-subheading">Modern Design</span>
              </li>
              <li>
                <span className="project-detail-point">✔</span>
                <span className="project-detail-subheading">Affordable Price</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <Products />

      {/* Image below boxes */}
      <Container className="project-detail-img-div">
        <img
          className="project-detail-img"
          src={require("../assets/projects/image-69.png")}
          alt="Detail"
        />
      </Container>
    </>
  );
};

export default Projects;
