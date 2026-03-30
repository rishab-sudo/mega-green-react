import React, { useState } from "react";
import { Container } from "react-bootstrap";
import StickyBanner from "../components/StickyBanner";
import banner1 from "../assets/banner/Banner7.jpeg"
import "./FloorPlan.css";

const FloorPlan = () => {
  const [active, setActive] = useState("all"); // 🔥 default ALL

  const plans = {
    villa1: [
      require("../assets/projects/Villa A GF copy.jpg.jpeg"),
      require("../assets/projects/Villa A FF.jpg (3).jpeg"),
    ],
    villa2: [
      require("../assets/projects/Villa B GF.jpg (1).jpeg"),
      require("../assets/projects/Villa B FF.jpg (1).jpeg"),
    ],
    villa3: [
      require("../assets/projects/Villa C GF.jpg (1).jpeg"),
      require("../assets/projects/Villa C FF.jpg (1).jpeg"),
    ],
  };



  return (
    <>
          {/* ===== Banner Section ===== */}
      <StickyBanner
        image={banner1}
        title="Floor Plans"
        currentPage="Floor Plans"
      />
  
    <Container fluid className="plan-section">
      <Container className="floor-content">
        {/* Heading */}
        <div className="plan-heading-div ">
          <h1 className="page-heading heading-center-underline">Floor PLANS</h1>
          <p className="page-description">The villa offers dedicated car parking, a spacious drawing and dining area for memorable gatherings, and a well-planned kitchen that supports everyday ease. Thoughtfully designed bedrooms provide privacy and relaxation, while a separate study room creates the perfect space for focus and productivity. Conveniently placed toilets and a practical store and dress area enhance functionality and organized living.</p>
        </div>

        {/* 🔘 Buttons */}
        <div className="plan-buttons">
          <button
            onClick={() => setActive("all")}
            className={active === "all" ? "active" : ""}
          >
            All Plans
          </button>

          <button
            onClick={() => setActive("villa1")}
            className={active === "villa1" ? "active" : ""}
          >
            Plan for Villa A
          </button>

          <button
            onClick={() => setActive("villa2")}
            className={active === "villa2" ? "active" : ""}
          >
            Plan for Villa B
          </button>

          <button
            onClick={() => setActive("villa3")}
            className={active === "villa3" ? "active" : ""}
          >
            Plan for Villa C
          </button>
        </div>

        {/* 🖼️ Images Grid */}
  {/* 🖼️ Images Grid */}
<div className="plan-grid-wrapper">
  {active === "all" ? (
    Object.keys(plans).map((key, i) => (
      <div key={i} className="plan-row">
        
        {/* 🔥 Heading per row */}
        <h3 className="plan-row-heading">
          {key === "villa1"
            ? "Villa A Floor Plan"
            : key === "villa2"
            ? "Villa B Floor Plan"
            : "Villa C Floor Plan"}
        </h3>

        <div className="plan-grid">
          {plans[key].map((img, index) => (
            <div className="plan-item" key={index}>
              <img src={img} alt={`plan-${index}`} />
            </div>
          ))}
        </div>

      </div>
    ))
  ) : (
    <div className="plan-row">
      <h3 className="plan-row-heading">
        {active === "villa1"
          ? "Villa A Floor Plan"
          : active === "villa2"
          ? "Villa B Floor Plan"
          : "Villa C Floor Plan"}
      </h3>

      <div className="plan-grid">
        {plans[active].map((img, index) => (
          <div className="plan-item" key={index}>
            <img src={img} alt={`plan-${index}`} />
          </div>
        ))}
      </div>
    </div>
  )}
</div>
      </Container>
    </Container>
      </>
  );
};

export default FloorPlan;