import React from "react";
import { Container, } from "react-bootstrap";
import "./ProjectsPage.css";
import ProjectPageBanner from "../components/ProjectPageBanner";
import img1 from "../assets/projects/villa1.jpeg";
import img2 from "../assets/projects/villa2.jpeg";
import img3 from "../assets/projects/villa3.jpeg";
// import img4 from "../assets/projects/villa-3-night.jpeg";
import DemoHighlight from "../components/DemoHighlight";


const images = [
  { src: img1, title: "Villa A" },
  { src: img2, title: "Villa B" },
  { src: img3, title: "Villa C" },
];
const Projects = () => {

  return (
    <>
      <ProjectPageBanner />

      {/* new-project-section */}
      <section className="new-project-section">
        {/* 🔹 Top Content */}
        <div className="new-project-heading-div container">
          <div className="heading-center-underline">
            <h2 className="page-heading">OUR PROJECT</h2>
          </div>

          <p className="page-description">
            Mega Green City is an exclusive villa township designed around the
            concept of eco-friendly and sustainable living. It offers beautifully
            crafted villas with modern amenities at an accessible price point,
            creating the perfect balance between comfort and nature.
          </p>

          <p className="page-description">
            The gated community features a grand entrance, 24×7 security, and
            controlled access, ensuring a safe and peaceful environment.
            Thoughtfully planned landscaping, lush green spaces, and tree-lined
            pathways enhance the natural beauty of the township.
          </p>

          <p className="page-description">
            Wide internal roads and well-designed infrastructure provide smooth
            connectivity and easy access to every villa. Each home is designed
            for privacy, ventilation, and natural light, offering a healthy and
            cozy lifestyle. Mega Green City is where green living meets modern
            comfort — an ideal destination for those who value peace, space, and
            sustainable living.
          </p>

          <span className="new-project-tagline">LIVE GREEN. LIVE PREMIUM.</span>
        </div>

        {/* 🔹 Slider */}
<Container className="new-project-slider-wrapper">

  {images.map((item, index) => (
    <div className="carousel-img-wrapper" key={index}>

      <div className="image-inner">

        <img
          className="new-project-carousel-img"
          src={item.src}
          alt={`villa-${index}`}
        />

        <div className="villa-overlay">
          <h2>{item.title}</h2>
        </div>

      </div>

    </div>
  ))}
</Container>

<DemoHighlight />
      </section>

    </>
  );
};

export default Projects;