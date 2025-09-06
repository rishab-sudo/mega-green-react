import React from "react";
import { Card } from "react-bootstrap";
import { FaBed, FaBath } from "react-icons/fa";
import "./Products.css";

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
    title: "Town House",
    description: "Perfect for small families with modern features.",
    beds: 3,
    baths: 2,
  },
  {
    id: 6,
    img: require("../assets/products/image-45.png"),
    price: "$450,000",
    title: "Penthouse Suite",
    description: "Luxury penthouse with panoramic views.",
    beds: 5,
    baths: 4,
  },
];

const Products = () => {
  return (
    <div className="productpage-section">
      <h2 className="productpage-heading">Our Properties</h2>

      <div className="productpage-grid">
        {properties.map((property) => (
          <Card key={property.id} className="productpage-card shadow-sm">
            <Card.Img
              variant="top"
              src={property.img}
              className="productpage-card-img"
            />
            <Card.Body className="productpageinfo">
              <h5 className="productpage-price">{property.price}</h5>
              <h4 className="productpage-title">{property.title}</h4>
              <p className="productpage-description">{property.description}</p>
              <hr />
              <div className="productpage-footer">
                <div className="productpage-icons">
                  <span>
                    <FaBed /> {property.beds} Beds
                  </span>
                  <span>
                    <FaBath /> {property.baths} Baths
                  </span>
                </div>
                <div className="productpage-booknow">Book Now →</div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
