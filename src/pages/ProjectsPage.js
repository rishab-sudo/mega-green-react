import React, { useEffect, useRef,useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Work from "../components/Work"
import "./ProjectsPage.css";
import ProjectPageBanner from "../components/ProjectPageBanner";
// Replace with your images
import img1 from "../assets/projects/villa1.jpeg";
import img2 from "../assets/projects/villa2.jpeg";
import img3 from "../assets/projects/villa3.jpeg";

const images = [img1, img2, img3];
const highlights = [
  "GRAND ENTRANCE",
  "24X7 GATED SECURITY",
  "TREE LINED WELL LIT ROAD",
  "FULLY EQUIPPED GYMNASIUM",
  "HALF BASKETBALL COURT",
  "TENNIS AND BADMINTON COURTS",
  "SWIMMING POOL",
  "LANDSCAPED GREEN SPACES",
  "CHILDREN’S PLAY AREA WITH SLIDES AND SWINGS",
  "CLEAN AND POLLUTION-FREE ENVIRONMENT",
  "EARTHQUAKE-RESISTANT CONSTRUCTION",
];
const Projects = () => {

  // const carouselRef = useRef(null);
const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ✅ Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500); // change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <ProjectPageBanner/>

{/* new-project-section */}
<section className="new-project-section">

  {/* 🔹 Top Content (Above Slider) */}
  <div className="new-project-heading-div container">
    <h2>OUR PROJECT</h2>

    <p>
      Mega Green City is an exclusive villa township designed around the concept of eco-friendly and
      sustainable living. It offers beautifully crafted villas with modern amenities at an accessible
      price point, creating the perfect balance between comfort and nature.
    </p>

    <p>
      The gated community features a grand entrance, 24×7 security, and controlled access, ensuring
      a safe and peaceful environment. Thoughtfully planned landscaping, lush green spaces, and
      tree-lined pathways enhance the natural beauty of the township.
    </p>

    <p>
      Wide internal roads and well-designed infrastructure provide smooth connectivity and easy access
      to every villa. Each home is designed for privacy, ventilation, and natural light, offering a
      healthy and cozy lifestyle. Mega Green City is where green living meets modern comfort — an ideal
      destination for those who value peace, space, and sustainable living.
    </p>

    <span className="new-project-tagline">LIVE GREEN. LIVE PREMIUM.</span>
  </div>

  {/* 🔹 Slider BELOW content */}
  <div className="new-project-slider-wrapper">
    <div
      className="new-project-slider"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {images.map((img, index) => (
        <div className="new-project-slide" key={index}>
          <img src={img} alt={`slide-${index}`} />
        </div>
      ))}
    </div>

    {/* Arrows */}
    <button className="slider-arrow left" onClick={prevSlide}>❮</button>
    <button className="slider-arrow right" onClick={nextSlide}>❯</button>
  </div>

</section>
   {/*  */}
 <section className="project-highlight">
      <Container>
        <div className="text-center highlight-heading-div">
          <h1>PROJECT HIGHLIGHTS</h1>
        </div>
        <div className="project-highlight-grid">
          {highlights.map((item, index) => (
            <div className="highlight-box" key={index}>
              <div className="highlight-icon">
                <FaCheckCircle />
              </div>
              <div className="highlight-text">{item}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>

  
      {/* Image below boxes */}
    <section className="plan-section">
      <Container fluid>
        <div className="plan-heading-div">
          <h1>PROJECT PLAN</h1>
        </div>
        <Container>
          {/* Block 1: Big Left */}
          <div className="plan-grid">
            <div className="plan-big">
              <img src={require("../assets/projects/plan1.jpg")} alt="plan1" />
            </div>
            <div className="plan-small">
              <img src={require("../assets/projects/plan2.jpg")} alt="plan2" />
            </div>
            <div className="plan-small">
              <img src={require("../assets/projects/plan3.jpg")} alt="plan3" />
            </div>
          </div>

          {/* Block 2: Big Right (swap) */}
          <div className="plan-grid reverse">
            <div className="plan-big">
              <img src={require("../assets/projects/plan4.jpg")} alt="plan4" />
            </div>
            <div className="plan-small">
              <img src={require("../assets/projects/plan5.jpg")} alt="plan5" />
            </div>
            <div className="plan-small">
              <img src={require("../assets/projects/plan6.jpg")} alt="plan6" />
            </div>
          </div>

          {/* You can repeat more blocks same pattern */}
        </Container>
      </Container>
    </section>
  <Work/>
      {/* <HomeGallery/> */}
    </>
  );
};

export default Projects;
