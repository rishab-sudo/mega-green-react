import React, { useEffect, useState } from "react";
import "./Appartments.css";

// Replace these images with your own
import plan1 from "../assets/projects/App-map.png";
import plan2 from "../assets/projects/App-map.png";
import plan3 from "../assets/projects/App-map.png";
import plan4 from "../assets/projects/App-map.png";
import plan5 from "../assets/projects/App-map.png";
import { Container } from "react-bootstrap";

const plans = [
  {
    name: "Sunrise",
    bedrooms: 3,
    bathrooms: 2,
    area: "80.12",
    garages: 1,
    price: "1,150,000",
    perSqm: "$35,000 / square m",
    image: plan1,
  },
  {
    name: "Vista",
    bedrooms: 2,
    bathrooms: 2,
    area: "72.50",
    garages: 1,
    price: "980,000",
    perSqm: "$32,000 / square m",
    image: plan2,
  },
  {
    name: "Paradise",
    bedrooms: 4,
    bathrooms: 3,
    area: "120.00",
    garages: 2,
    price: "1,850,000",
    perSqm: "$40,000 / square m",
    image: plan3,
  },
  {
    name: "Monterey",
    bedrooms: 3,
    bathrooms: 2,
    area: "95.00",
    garages: 1,
    price: "1,320,000",
    perSqm: "$36,000 / square m",
    image: plan4,
  },
  {
    name: "Sea Breeze",
    bedrooms: 2,
    bathrooms: 2,
    area: "70.00",
    garages: 1,
    price: "890,000",
    perSqm: "$30,000 / square m",
    image: plan5,
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
        <h2 className="appartments-title">Apartments Plans</h2>

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
            <h3>{plans[activeIndex].name}</h3>

            <ul>
              <li>
                <span>Bedrooms</span>
                <span>{plans[activeIndex].bedrooms}</span>
              </li>
              <li>
                <span>Bathrooms</span>
                <span>{plans[activeIndex].bathrooms}</span>
              </li>
              <li>
                <span>Area size</span>
                <span>{plans[activeIndex].area}</span>
              </li>
              <li>
                <span>Garages</span>
                <span>{plans[activeIndex].garages}</span>
              </li>
              <li>
                <span>$</span>
                <span>{plans[activeIndex].price}</span>
              </li>
            </ul>

            <p className="price-per">{plans[activeIndex].perSqm}</p>

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
