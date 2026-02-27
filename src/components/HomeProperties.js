import React, { useEffect, useRef } from "react";
import "./HomeProperties.css";
import { Container } from "react-bootstrap";

const data = [
  { 
    title: "Villa - A", 
    img: require("../assets/projects/villa1.jpeg"),
    para1: `At Mega Green City, Villa Type-A is designed for families who seek comfort, space, and refined living. True to our vision of “Building the Life You Aspire,” this home beautifully blends modern architecture with the serenity of nature.`,
    para2: `The villa offers dedicated car parking, a spacious drawing and dining area for memorable gatherings, and a well-planned kitchen that supports everyday ease. Thoughtfully designed bedrooms provide privacy and relaxation, while a separate study room creates the perfect space for focus and productivity. Conveniently placed toilets and a practical store and dress area enhance functionality and organized living.`
  },
  { 
    title: "Villa - B", 
    img: require("../assets/projects/villa2.jpeg"),
    para1: `At Mega Green City, Villa Type-B is thoughtfully designed to offer a perfect balance of comfort and practicality. Inspired by our vision of “Building the Life You Aspire,” this home combines modern design with a peaceful, green environment.`,
    para2: `The villa features dedicated car parking, a welcoming drawing and dining area for everyday living and gatherings, and a functional kitchen crafted for convenience. Well-planned bedrooms ensure privacy and relaxation, while strategically placed toilets enhance comfort for the entire family. A dedicated store/dress area adds to organized and efficient living.`
  },
  { 
    title: "Villa - C", 
    img: require("../assets/projects/villa3.jpeg"),
    para1: `At Mega Green City, Villa Type-C is crafted for those who value smart design and comfortable living in a peaceful setting. Reflecting our vision of “Building the Life You Aspire,” this villa blends functionality with modern elegance.`,
    para2: `The home features a welcoming drawing and dining area, a thoughtfully planned kitchen, and cozy bedrooms designed for everyday comfort. Well-placed toilets ensure convenience, while a practical store area supports organized living.`
  },
];

const HomeProperties = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;

        const viewportCenter = windowH / 2;
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        let progress = 1 - distance / viewportCenter;
        progress = Math.min(Math.max(progress, 0), 1);

        const lines = section.querySelectorAll(".villa-line");
        lines.forEach((line) => {
          line.style.width = `${progress * 40}%`;
        });

        const img = section.querySelector(".villa-image");
        const minW = 300;
        const maxW = section.offsetWidth;
        const minH = 300;
        const maxH = 500;

        const currentW = minW + (maxW - minW) * progress;
        const currentH = minH + (maxH - minH) * progress;

        img.style.width = `${currentW}px`;
        img.style.height = `${currentH}px`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container className="text-center heading-container">
        <h1 className="page-heading heading-center-underline">
          OUR PROPERTIES
        </h1>
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
        </div>
      ))}
    </>
  );
};

export default HomeProperties;