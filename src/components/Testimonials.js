import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: require("../assets/image-98-persn.png"),
      name: "John Doe",
      work: "CEO, Company",
      review:
        "This service exceeded my expectations. Highly recommended for anyone looking for quality!",
      rating: 5,
    },
    {
      id: 2,
   img: require("../assets/image-98-persn.png"),
      name: "Sarah Smith",
      work: "Designer",
      review:
        "Amazing experience! Everything was smooth and professional from start to finish.",
      rating: 4,
    },
    {
      id: 3,
   img: require("../assets/image-98-persn.png"),
      name: "David Johnson",
      work: "Developer",
      review:
        "The support team was incredibly helpful and guided me throughout. 5 stars!",
      rating: 5,
    },
    {
      id: 4,
     img: require("../assets/image-98-persn.png"),
      name: "Emily Brown",
      work: "Entrepreneur",
      review:
        "Best investment I’ve made in a long time. I’ll definitely recommend to others.",
      rating: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>
          Hear from our happy customers who trusted us and had a great
          experience.
        </p>
      </div>

      <Container className="testimonials-container">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-top">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <span>{t.work}</span>
                </div>
              </div>
              <p className="testimonial-review">"{t.review}"</p>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < t.rating ? "star filled" : "star"}
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;
