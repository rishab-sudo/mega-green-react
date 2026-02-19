import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./HomeAbout.css";
import { FaCheckCircle } from "react-icons/fa";

const images = [
  require("../assets/banner/Banner7.jpeg"),
  require("../assets/banner/Banner1.jpeg"),
  require("../assets/banner/Banner2.jpeg"),
  require("../assets/banner/Banner3.jpeg"),
  require("../assets/banner/Banner4.jpeg"),
];

const HomeAbout = () => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [animate, setAnimate] = useState(true);

  const handleImageChange = (img) => {
    setAnimate(false);
    setTimeout(() => {
      setActiveImage(img);
      setAnimate(true);
    }, 50);
  };

  return (
    <section className="exclusive g-0">
      <Container fluid className="exclusive-container g-0">

        {/* Left Side with Image Gallery */}
        <div className="exclusive-left">
          <div className="exclusive-image-wrapper">
            <img
              src={activeImage}
              alt="Exclusive"
              className={`exclusive-image ${animate ? "fade-zoom" : ""}`}
            />

            {/* Thumbnails OVER the big image at bottom */}
            <div className="exclusive-thumbs overlay">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  className={`exclusive-thumb ${activeImage === img ? "active" : ""}`}
                  onClick={() => handleImageChange(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side with Content */}
        <div className="exclusive-right">
          <h2 className="exclusive-heading">About Us</h2>
          <p className="exclusive-description">
            We are Mega Group, builders driven by one goal and one ideal: <strong>Better Living</strong>.
            We work tirelessly to bring the future closer to the present by delivering superior quality,
            improving neighborhoods, and making every home better than the last.
          </p>

          <div className="exclusive-points">
            <div className="exclusive-point">
              <div><FaCheckCircle className="point-icon" /></div>
              <div>
                <p>Better Living</p>
                <p>
                  At Mega Group, our foundation is built on strong ideals. We strive to provide the utmost
                  quality of living and ensure every dwelling is better than the last.
                </p>
              </div>
            </div>

            <div className="exclusive-point">
              <div><FaCheckCircle className="point-icon" /></div>
              <div>
                <p>Enduring Assurance</p>
                <p>
                  We have been delivering every promise since day one. A home is more than walls and a roof,
                  it is a place of comfort and fulfilled promises.
                </p>
              </div>
            </div>
          </div>

          <button className="exclusive-btn">Know More</button>
        </div>

      </Container>
    </section>
  );
};

export default HomeAbout;
