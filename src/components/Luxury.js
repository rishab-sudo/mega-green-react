import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Luxury.css";
import { FaArrowRight, FaGem, FaCrown, FaStar } from "react-icons/fa";

const Luxury = () => {
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              setRotation((prev) => prev + 180); // always +180 → clockwise
            }, 3500);
          }
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setRotation(0); // reset to initial state when leaving
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const cards = [
    {
      id: 1,
      icon: <FaGem size={40} />,
      title: "Luxury Living",
      desc: "Experience premium comfort and style in every corner.",
      img: require("../assets/banner/Banner8.jpeg"),
    },
    {
      id: 2,
      icon: <FaCrown size={40} />,
      title: "Exclusive Design",
      desc: "Crafted with elegance and modern sophistication.",
      img: require("../assets/banner/Banner7.jpeg"),
    },
    {
      id: 3,
      icon: <FaStar size={40} />,
      title: "Top Quality",
      desc: "We bring unmatched quality and excellence.",
      img: require("../assets/banner/Banner5.jpeg"),
    },
  ];

  return (
    <div className="luxury-section" ref={sectionRef}>
      <Container>
        <Row className="align-items-center luxury-header">
          <Col md={12} className="text-center">
            <h2 className="luxury-heading">Luxury Experience</h2>
            <p className="luxury-desc">
              Discover the finest collection of premium living and lifestyle with our
              exclusive offerings.
            </p>
          </Col>
          {/* <Col md={4} className="text-md-end text-start mt-3 mt-md-0">
            <Button variant="dark" className="luxury-btn">
              Explore More
            </Button>
          </Col> */}
        </Row>

        <Row className="luxury-cards mt-5">
          {cards.map((card) => (
            <Col md={4} sm={12} key={card.id} className="mb-4">
              <div className="luxury-card">
                <div
                  className="luxury-card-inner"
                  style={{ transform: `rotateY(${rotation}deg)` }}
                >
                  <div
                    className="luxury-card-front"
                    style={{ backgroundImage: `url(${card.img})` }}
                  ></div>

                  <div className="luxury-card-back">
                    <div className="luxury-icon">{card.icon}</div>
                    <h5 className="luxury-title">{card.title}</h5>
                    <p className="luxury-text">{card.desc}</p>
                    <div className="luxury-link">
                      See More <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Luxury;
