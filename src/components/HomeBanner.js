import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeBanner.css";

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slides = [
    {
      img: require("../assets/banner/room1.jpg"),
      heading: "Welcome to Our Website",
      desc: `This is a short description of your service or product.<br/>
             You can add more details here.<br/>
             Make your content more engaging with line breaks.`,
      btn: "Get Started",
    },
    {
      img: require("../assets/banner/room2.jpg"),
      heading: "Our Premium Rooms",
      desc: `Experience luxury like never before.
             Explore our premium collection.`,
      btn: "Book Now",
    },
    {
      img: require("../assets/banner/room1.jpg"),
      heading: "Special Offers",
      desc: `Grab amazing discounts and deals.
             Available for a limited time only.`,
      btn: "View Offers",
    },
  ];

  return (
    <section className="home-banner">
      {/* Left Text (Dynamic with fade) */}
      <div className="home-banner-left desktop-only">
        <div key={currentSlide} className="banner-text-box fade-in">
          <h1 className="banner-heading">{slides[currentSlide].heading}</h1>
          <p
            className="banner-description"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].desc }}
          ></p>
          <button className="banner-btn">{slides[currentSlide].btn}</button>
        </div>
      </div>

      {/* Right Slider */}
      <div className="home-banner-right">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="banner-slide">
              <img
                src={slide.img}
                alt={`Slide ${index}`}
                className="banner-img"
              />
              {/* Text Box (Mobile only) */}
              <div className="banner-text-box mobile-only">
                <h1 className="banner-heading">{slide.heading}</h1>
                <p
                  className="banner-description"
                  dangerouslySetInnerHTML={{ __html: slide.desc }}
                ></p>
                <button className="banner-btn">{slide.btn}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeBanner;
