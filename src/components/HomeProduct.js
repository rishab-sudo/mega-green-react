import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBed, FaBath } from "react-icons/fa";
import "./homeProduct.css";

const properties = [
  {
    id: 1,
    img: require("../assets/products/image-45.png"),
    price: "$250,000",
    title: "Modern Family Home",
    description: "A beautiful modern house located in the heart of the city.",
    beds: 3,
    baths: 3,
  },
  {
    id: 2,
    img: require("../assets/products/image-45.png"),
    price: "$180,000",
    title: "Cozy Cottage",
    description: "A charming cottage with a lovely garden view.",
    beds: 2,
    baths: 2,
  },
  {
    id: 3,
    img: require("../assets/products/image-45.png"),
    price: "$320,000",
    title: "Luxury Villa",
    description: "Spacious villa with modern amenities and pool access.",
    beds: 4,
    baths: 3,
  },
  {
    id: 4,
    img: require("../assets/products/image-45.png"),
    price: "$150,000",
    title: "Urban Apartment",
    description: "Stylish apartment in the city center.",
    beds: 2,
    baths: 1,
  },
  {
    id: 5,
    img: require("../assets/products/image-45.png"),
    price: "$150,000",
    title: "Urban Apartment",
    description: "Stylish apartment in the city center.",
    beds: 2,
    baths: 1,
  },
  {
    id: 6,
    img: require("../assets/products/image-45.png"),
    price: "$150,000",
    title: "Urban Apartment",
    description: "Stylish apartment in the city center.",
    beds: 2,
    baths: 1,
  },
];

const HomeProduct = () => {
  return (
    <Container fluid className="homeproducts-section">
      <Container>
        <h2 className="homeproducts-heading">Our Properties</h2>
        <Row>
          {properties.map((property) => (
            <Col key={property.id} xs={12} sm={6} lg={4} className="mb-4">
              <Card className="homeproducts-card shadow-sm">
                <Card.Img variant="top" src={property.img} />
                <Card.Body>
                  <h5 className="homeproducts-price">{property.price}</h5>
                  <h4 className="homeproducts-title">{property.title}</h4>
                  <p className="homeproducts-description">
                    {property.description}
                  </p>
                  <hr />
                  <div className="homeproducts-footer">
                    <div className="homeproducts-icons">
                      <span><FaBed /> {property.beds} Beds</span>
                      <span><FaBath /> {property.baths} Baths</span>
                    </div>
                    <div className="homeproducts-booknow">Book Now →</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HomeProduct;
