import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./TrendingProperty.css";

const TrendingProperty = () => {
  const properties = [
    {
      id: 1,
      img: require("../assets/products/image-45.png"),
      title: "Modern Apartment",
      desc: "Beautiful modern apartment in the city center.",
      beds: 2,
      baths: 2,
    },
    {
      id: 2,
      img: require("../assets/products/image-45.png"),
      title: "Luxury Villa",
      desc: "Spacious villa with private pool.",
      beds: 4,
      baths: 3,
    },
    {
      id: 3,
      img: require("../assets/products/image-45.png"),
      title: "Cozy Studio",
      desc: "Perfect for singles or couples.",
      beds: 1,
      baths: 1,
    },
      {
      id: 4,
      img: require("../assets/products/image-45.png"),
      title: "Cozy Studio",
      desc: "Perfect for singles or couples.",
      beds: 1,
      baths: 1,
    },
  ];

  return (
    <div className="property-section">
      {/* Top heading + description */}
      <div className="container-fluid text-center mb-4">
        <h2 className="section-heading">Our Properties</h2>
        <p className="section-desc">Find your dream home with us</p>
      </div>

      {/* Main content */}
      <Container className="property-content-container">
        <Row className="justify-content-center">
          {properties.map((prop) => (
            <Col
              key={prop.id}
              xs={12}
              md={6}
              className="d-flex justify-content-center mb-4"
            >
              <div className="property-card">
                <div className="card-badge">{prop.id}</div>
                <div className="card-left">
                  <img src={prop.img} alt={prop.title} />
                </div>
                <div className="card-right">
                  <h5>{prop.title}</h5>
                  <p>{prop.desc}</p>
                  <div className="card-info">
                    <span>{prop.beds} Beds</span>
                    <span>{prop.baths} Baths</span>
                  </div>
                  <Button className="property-btn" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TrendingProperty;
