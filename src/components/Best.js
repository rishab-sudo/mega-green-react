import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Best.css";

const slides = [
  {
    title: "About Our Company",
    year: "2024",
    desc: "Each apartment has been individually designed to maximise space and light with smart home technology.",
    image: require("../assets/banner/Banner1.jpeg"),
  },
  {
    title: "About Our Company",
    year: "2025",
    desc: "Premium materials and thoughtful layouts for a comfortable and modern lifestyle.",
    image: require("../assets/banner/Banner2.jpeg"),
  },
  {
    title: "About Our Company",
    year: "2026",
    desc: "Smart layouts, elegant interiors and high quality construction standards.",
    image: require("../assets/banner/Banner3.jpeg"),
  },
  {
    title: "About Our Company",
    year: "2027",
    desc: "Designed for people who value comfort, style and long-term reliability.",
    image: require("../assets/banner/Banner4.jpeg"),
  },
  {
    title: "About Our Company",
    year: "2028",
    desc: "A perfect blend of architecture, technology and lifestyle.",
    image: require("../assets/banner/Banner5.jpeg"),
  },
];

const Best = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeSlide = (newIndex) => {
    setAnimate(false);
    setTimeout(() => {
      setIndex(newIndex);
      setAnimate(true);
    }, 60);
  };

  const prevSlide = () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    changeSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = index === slides.length - 1 ? 0 : index + 1;
    changeSlide(newIndex);
  };

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // every 4 sec

    return () => clearInterval(interval);
  }, [index]); // keep in sync

  return (
    <section className="about-split-nolib">
      <Container fluid className="about-split-container g-0">
        {/* LEFT SIDE */}
        <div className="about-left container">
            <div className="left-text-wrapper">
          <h2 className="about-heading">{slides[index].title}</h2>
          <span className="about-year">{slides[index].year}</span>

          <p className={`about-para ${animate ? "slide-left" : ""}`}>
            {slides[index].desc}
          </p>
          <div className="about-arrows">
            <button onClick={prevSlide}>
              <FaArrowLeft />
            </button>
            <button onClick={nextSlide}>
              <FaArrowRight />
            </button>
          </div>
        </div>
</div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <div className="about-image-wrapper">
            <img
              src={slides[index].image}
              alt="About"
              className={`about-main-image ${animate ? "slide-left" : ""}`}
            />

            {/* THUMBNAILS OVER IMAGE */}
            <div className="about-thumbs">
              {slides.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt="thumb"
                  className={`about-thumb ${i === index ? "active" : ""}`}
                  onClick={() => changeSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Best;
