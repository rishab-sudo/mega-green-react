import React, { useEffect, useState } from "react";
import "./Appartments.css";

// Replace these images with your own
import plan1 from "../assets/projects/App-map.png";
import plan2 from "../assets/projects/App-map.png";
import plan3 from "../assets/projects/App-map.png";

import { Container } from "react-bootstrap";

const plans = [
  {
    name: "Villa 1",
    plotSize: "7.00 × 14.27 M",
    floors: 2,
    carpetArea: "1136 SQ.FT",
    type: "3 BHK VILLA",
    // extra: '7000 [23"] × 14270 [46\'-10"] Ground',
    image: plan1,
  },
  {
    name: "Villa 2",
    plotSize: "6.810 × 12.610 M",
    floors: 2,
    carpetArea: "900 SQ.FT",
    type: "3 BHK VILLA",
    extra: "",
    image: plan2,
  },
  {
    name: "Villa 3",
    plotSize: "5.14 × 10.71 M",
    floors: 2,
    carpetArea: "557 SQ.FT",
    type: "3 BHK",
    extra: "",
    image: plan3,
  },
];

const Appartments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % plans.length);
    }, 4000); // change slide every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="appartments">
      <Container className="appartments-container">
        <div className="heading-center-underline">
        <h2 className="appartments-title page-heading">Apartments Plans</h2>
</div>
        {/* Tabs */}
        <div className="appartments-tabs">
          {plans.map((plan, index) => (
            <button
              key={index}
              className={`appartments-tab ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {plan.name}
            </button>
          ))}
          <div
            className="appartments-indicator"
            style={{
              width: `${100 / plans.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="appartments-content">
         <div className="appartments-info">
  <h3 className="page-subheading">{plans[activeIndex].name}</h3>

  <ul>
    <li>
      <span>Plot Size</span>
      <span>{plans[activeIndex].plotSize}</span>
    </li>
    <li>
      <span>Floors</span>
      <span>{plans[activeIndex].floors}</span>
    </li>
    <li>
      <span>Carpet Area</span>
      <span>{plans[activeIndex].carpetArea}</span>
    </li>
    <li>
      <span>Type</span>
      <span>{plans[activeIndex].type}</span>
    </li>

    {plans[activeIndex].extra && (
      <li>
        <span>Details</span>
        <span>{plans[activeIndex].extra}</span>
      </li>
    )}
  </ul>

  <button className="learn-more-btn">Know More</button>
</div>

          <div className="appartments-image">
            <img
              src={plans[activeIndex].image}
              alt={plans[activeIndex].name}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Appartments;
