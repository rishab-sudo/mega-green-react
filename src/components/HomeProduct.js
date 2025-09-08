import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
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
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // keep true so card stays centered
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="homeproducts-section">
      <h2 className="homeproducts-heading">Our Properties</h2>
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="homeproducts-slide">
            <Card className="homeproducts-card shadow-sm">
              <Card.Img variant="top" src={property.img} />
              <Card.Body>
                <h5 className="homeproducts-price">{property.price}</h5>
                <h4 className="homeproducts-title">{property.title}</h4>
                <p className="homeproducts-description">{property.description}</p>
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeProduct;
