import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Luxury.css";
import { FaArrowRight, FaGem, FaCrown, FaStar } from "react-icons/fa";

const Luxury = () => {
   const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

 const handleClick = () => {
    navigate("/projects"); 
  };

  useEffect(() => {
    const sectionEl = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              setFlipped((prev) => !prev); // 🔁 just toggle
            }, 2500);
          }
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setFlipped(false);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionEl) observer.observe(sectionEl);

    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
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
      title: "Green Luxury Living",
      desc: "Experience eco-friendly luxury villas designed for a healthier, more peaceful lifestyle.",
      img: require("../assets/projects/villa1.jpeg"),
    },
    {
      id: 2,
      icon: <FaCrown size={40} />,
      title: "Premium Villa Design",
      desc: "Thoughtfully crafted villas that blend modern elegance with nature-inspired living.",
      img: require("../assets/projects/villa2.jpeg"),
    },
    {
      id: 3,
      icon: <FaStar size={40} />,
      title: "Best Quality Used",
      desc: "Built with top-grade materials and superior finishing for long-lasting comfort and value.",
      img: require("../assets/projects/villa3.jpeg"),
    },
  ];

  return (
    <div className="luxury-section" ref={sectionRef}>
      <Container>
        <Row className="align-items-center luxury-header">
          <Col md={12} className="text-center">
           <div className="heading-center-underline">
            <h2 className="luxury-heading page-heading">Luxury Experience</h2>
           </div>
            <p className="luxury-desc page-description">
              Discover the finest collection of premium living and lifestyle with our exclusive offerings.
            </p>
          </Col>
        </Row>

        <Row className="luxury-cards mt-5">
          {cards.map((card) => (
            <Col md={4} sm={12} key={card.id} className="mb-4">
              <div className={`luxury-card ${flipped ? "flipped" : ""}`}>
                <div className="luxury-card-inner">
                  <div
                    className="luxury-card-front"
                    style={{ backgroundImage: `url(${card.img})` }}
                  ></div>

                  <div className="luxury-card-back">
                    <div className="luxury-icon">{card.icon}</div>
                    <h5 className="luxury-title">{card.title}</h5>
                    <p className="luxury-text">{card.desc}</p>
                    <div className="luxury-link" onClick={handleClick}>
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