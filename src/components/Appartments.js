import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Appartments.css";

// Replace these images with your own
import plan1 from "../assets/projects/App-map2.jpeg";
import plan2 from "../assets/projects/App-map2.jpeg";
import plan3 from "../assets/projects/App-map2.jpeg";

import { Container } from "react-bootstrap";

const plans = [
  {
    name: "Villa  A",
    plotSize: "99.89 Sq.Mtrs (119.47 Sq.Yards)",
    floors: "Duplex",
    coveredArea: "155.388 Sq.Mtrs. (1672.588 Sq.Ft)",
    // type: "2BHK, 3BHK, 4BHK",
    // extra: '7000 [23"] × 14270 [46\'-10"] Ground',
    image: plan1,
  },
  {
    name: "Villa  B",
    plotSize: "85.874 Sq.Mtrs (102.704 Sq.Yards)",
   floors: "Duplex",
    coveredArea: "132.904 Sq.Mtrs (1430.566 Sq.Ft)",
    // type: "2BHK, 3BHK, 4BHK",
  
    image: plan2,
  },
  {
    name: "Villa  C",
    plotSize: "55.05 Sq.Mtrs (65.839 Sq.Yards)",
  floors: "Duplex",
    coveredArea: "81.1225 Sq.Mtrs (873.194 Sq.Ft)",
  //  type: "2BHK, 3BHK, 4BHK",
   
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
        <h2 className="appartments-title page-heading">Villa Plans</h2>
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
      <span>Living Floors</span>
      <span>{plans[activeIndex].floors}</span>
    </li>
    <li>
      <span> Total Covered Area</span>
      <span>{plans[activeIndex].coveredArea}</span>
    </li>
    {/* <li>
      <span>Villa Type</span>
      <span>{plans[activeIndex].type}</span>
    </li> */}

    {plans[activeIndex].extra && (
      <li>
        <span>Details</span>
        <span>{plans[activeIndex].extra}</span>
      </li>
    )}
  </ul>

 <Link to="/projects">
  <button className="learn-more-btn">Know More</button>
</Link>
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
