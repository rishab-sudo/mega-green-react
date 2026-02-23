import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [index, setIndex] = useState(0);

  // Manual change (thumbnail click)
  const handleImageChange = (img, i) => {
    setAnimate(false);
    setTimeout(() => {
      setActiveImage(img);
      setIndex(i);
      setAnimate(true);
    }, 100);
  };

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => {
          const nextIndex = (prev + 1) % images.length;
          setActiveImage(images[nextIndex]);
          return nextIndex;
        });
        setAnimate(true);
      }, 100);
    }, 4000); // change time here (4s)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="exclusive g-0">
      <Container fluid className="exclusive-container g-0">

        {/* LEFT: Image Gallery */}
        <motion.div
          className="exclusive-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="exclusive-image-wrapper">
            <img
              src={activeImage}
              alt="Exclusive"
              className={`exclusive-image ${animate ? "fade-zoom" : ""}`}
            />

            {/* Thumbnails */}
            <div className="exclusive-thumbs overlay">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className={`exclusive-thumb ${index === i ? "active" : ""}`}
                  onClick={() => handleImageChange(img, i)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          className="exclusive-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

      </Container>
    </section>
  );
};

export default HomeAbout;