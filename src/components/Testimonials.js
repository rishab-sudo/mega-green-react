import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { Container } from "react-bootstrap";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: require("../assets/image-98-persn.png"),
      name: "Amit Sharma",
      // work: "Home Buyer, Mega Group",
      review:
        "Mega Group delivered exactly what they promised. The project quality and timely delivery really impressed me.",
      rating: 5,
    },
    {
      id: 2,
      img: require("../assets/image-98-persn.png"),
      name: "Priya Verma",
      // work: "Investor",
      review:
        "Very professional team and great support throughout the buying process. Highly recommend Mega Group.",
      rating: 4,
    },
    {
      id: 3,
      img: require("../assets/image-98-persn.png"),
      name: "Rahul Gupta",
      // work: "Business Owner",
      review:
        "The construction quality and location are excellent. I am very satisfied with Mega Group’s service.",
      rating: 5,
    },
    {
      id: 4,
      img: require("../assets/image-98-persn.png"),
      name: "Neha Singh",
      // work: "Architect",
      review:
        "Well-planned project with great attention to detail. Mega Group truly focuses on quality and customer trust.",
      rating: 4,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="heading-center-underline">
          <h2 className="page-heading">What Our Clients Say</h2>
        </div>
        <p className="page-description">
          Real experiences from customers who chose Mega Group.
        </p>
      </div>

      <Container className="testimonials-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile
            },
            768: {
              slidesPerView: 2, // tablet
            },
            1024: {
              slidesPerView: 3, // desktop
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <div className="testimonial-top">
                  <img src={t.img} alt={t.name} className="testimonial-img" />
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    {/* <span>{t.work}</span> */}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;