import React, { useEffect, useRef } from "react";
import "./HomeProperties.css";
import { Container } from "react-bootstrap";

const data = [
  { title: "Villa - A ", img: require("../assets/projects/villa1.jpeg") },
  { title: "Villa - B", img: require("../assets/projects/villa2.jpeg") },
  { title: "Villa - C", img: require("../assets/projects/villa3.jpeg") },
];

const HomeProperties = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;

        // section ka center viewport ke center ke kitna paas hai (0 to 1)
        const viewportCenter = windowH / 2;
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        let progress = 1 - distance / viewportCenter; // center pe 1, door jaate jaate 0
        progress = Math.min(Math.max(progress, 0), 1); // clamp 0–1

        // lines
        const lines = section.querySelectorAll(".villa-line");
        lines.forEach((line) => {
          line.style.width = `${progress * 40}%`; // max 40%
        });

        // image
        const img = section.querySelector(".villa-image");
        const minW = 300;
        const maxW = section.offsetWidth; // full container
        const minH = 300;
        const maxH = 500;

        const currentW = minW + (maxW - minW) * progress;
        const currentH = minH + (maxH - minH) * progress;

        img.style.width = `${currentW}px`;
        img.style.height = `${currentH}px`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Container className="text-center heading-container">
<h1 className="page-heading heading-center-underline">OUR PROPERTIES </h1>
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
        </div>
      ))}
    </>
  );
};

export default HomeProperties;