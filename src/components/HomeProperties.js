import React, { useEffect, useRef } from "react";
import "./HomeProperties.css";
import { Container } from "react-bootstrap";


const data = [
  { 
    title: "Villa - A", 
    img: require("../assets/projects/villa1.jpeg"),
    para1: `At Mega Green City, Villa Type-A is designed for families who seek comfort, space, and refined living. True to our vision of “Building the Life You Aspire,” this home beautifully blends modern architecture with the serenity of nature.

The villa offers dedicated car parking, a spacious drawing and dining area for memorable gatherings, and a well-planned kitchen that supports everyday ease. Thoughtfully designed bedrooms provide privacy and relaxation, while a separate study room creates the perfect space for focus and productivity. Conveniently placed toilets and a practical store and dress area enhance functionality and organized living.`,
    features: [
      { icon: require("../assets/icons/bedroom.png"), text: "3 Bedroom" },
      { icon: require("../assets/icons/study.png"), text: "1 Study Room" },
      { icon: require("../assets/icons/closet.png"), text: "2 Store / Dressing" },
      { icon: require("../assets/icons/toileta.png"), text: "3 Toilets" },
      { icon: require("../assets/icons/kitchen.png"), text: " Kitchen" },
      { icon: require("../assets/icons/Drawing.png"), text: "Drawing / Dining" },
      { icon: require("../assets/icons/car prk.png"), text: "Car Parking" },
    ]
  },

  { 
    title: "Villa - B", 
    img: require("../assets/projects/villa2.jpeg"),
    para1: `At Mega Green City, Villa Type-B is thoughtfully designed to offer a perfect balance of comfort and practicality. Inspired by our vision of “Building the Life You Aspire,” this home combines modern design with a peaceful, green environment.

The villa features dedicated car parking, a welcoming drawing and dining area for everyday living and gatherings, and a functional kitchen crafted for convenience. Well-planned bedrooms ensure privacy and relaxation, while strategically placed toilets enhance comfort for the entire family. A dedicated store/dress area adds to organized and efficient living.`,
 
    features: [
      { icon: require("../assets/icons/bedroom.png"), text: "3 Bedroom" },
      { icon: require("../assets/icons/closet.png"), text: "1 Store/Dressing" },
      { icon: require("../assets/icons/toileta.png"), text: "3 Toilet" },
      { icon: require("../assets/icons/kitchen.png"), text: "Kitchen" },
      { icon: require("../assets/icons/Drawing.png"), text: "Drawing/Dinning" },
       { icon: require("../assets/icons/car prk.png"), text: "Car Parking" },
    ]
  },

  { 
    title: "Villa - C", 
    img: require("../assets/projects/villa3.jpeg"),
    para1: `At Mega Green City, Villa Type-C is crafted for those who value smart design and comfortable living in a peaceful setting. Reflecting our vision of “Building the Life You Aspire,” this villa blends functionality with modern elegance.

The home features a welcoming drawing and dining area, a thoughtfully planned kitchen, and cozy bedrooms designed for everyday comfort. Well-placed toilets ensure convenience, while a practical store area supports organized living.`,
  
  features: [
      { icon: require("../assets/icons/bedroom.png"), text: "2 Bedroom" },
      { icon: require("../assets/icons/closet.png"), text: "1 Store" },
      { icon: require("../assets/icons/toileta.png"), text: "2 Toilet" },
      { icon: require("../assets/icons/kitchen.png"), text: "Kitchen" },
      { icon: require("../assets/icons/Drawing.png"), text: "Drawing/Dinning" },

    ]
  },
];

const HomeProperties = () => {
  const sectionsRef = useRef([]);

useEffect(() => {
  const NAVBAR_HEIGHT = 50;

  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const windowW = window.innerWidth;

      // 🔥 trigger when section reaches navbar
      let progress = 1 - (rect.top - NAVBAR_HEIGHT) / windowH;

      // clamp
      progress = Math.min(Math.max(progress, 0), 1);

      // smoother easing
      progress = Math.pow(progress, 1.5);

      // ===== LINE =====
      const lines = section.querySelectorAll(".villa-line");
      lines.forEach((line) => {
        line.style.width = `${progress * 40}%`;
      });

      // ===== IMAGE =====
      const img = section.querySelector(".villa-image");

      const minW = 280;
      const maxW = windowW;

      const minH = 280;
      const maxH = windowH * 0.9;

      const currentW = minW + (maxW - minW) * progress;
      const currentH = minH + (maxH - minH) * progress;

      img.style.width = `${currentW}px`;
      img.style.height = `${currentH}px`;

      // premium feel
      img.style.transform = `scale(${0.9 + progress * 0.1})`;
      img.style.borderRadius = `${10 - progress * 10}px`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <Container className="text-center heading-container">
        {/* <h1 className="page-heading heading-center-underline">
          OUR VILLAS
        </h1> */}
      </Container>

      {data.map((item, index) => (
        <div
          className="villa-section"
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <div className="villa-heading-wrap">
            <span className="villa-line left"></span>
            <h2 className="villa-heading">{item.title}</h2>
            <span className="villa-line right"></span>
          </div>

          <div className="villa-image-wrap">
            <img src={item.img} alt={item.title} className="villa-image" />
          </div>

          {/* Gray Content Section */}
          <div className="villa-content">
            <Container >
            <h3 className="villa-subheading">
              Building the Life You Aspire
            </h3>

            <p className="villa-description page-description">{item.para1}</p>
            <p className="villa-description page-description">{item.para2}</p>
</Container>
          </div>
          {/* ===== ICON FEATURES ===== */}
<div className="villa-features">
  {item.features.map((feature, i) => (
    <div className="feature-item" key={i}>
      <img src={feature.icon} alt={feature.text} />
      <span>{feature.text}</span>
    </div>
  ))}
</div>

        </div>
      ))}
    </>
  );
};

export default HomeProperties;