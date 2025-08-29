import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeBanner.css";

const HomeBanner = () => {
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
  };

  const slides = [
    {
      img: require("../assets/banner/room1.jpg"),
      heading: "Welcome to Our Website",
      desc: "This is a short description of your service or product. You can add more details here.",
      btn: "Get Started",
    },
    {
      img: require("../assets/banner/room2.jpg"),
      heading: "Our Premium Rooms",
      desc: "Experience luxury like never before with our premium collection.",
      btn: "Book Now",
    },
    {
      img: require("../assets/banner/room1.jpg"),
      heading: "Special Offers",
      desc: "Grab amazing discounts and deals available for a limited time.",
      btn: "View Offers",
    },
  ];

  return (
    <section className="home-banner">
      {/* Left Text (Desktop) */}
      <div className="home-banner-left desktop-only">
        <div className="banner-text-box">
          <h1 className="banner-heading">Welcome to Our Website</h1>
          <p className="banner-description">
            This is a short description of your service or product. You can add
            more details here.
          </p>
          <button className="banner-btn">Get Started</button>
        </div>
      </div>

      {/* Right Slider */}
      <div className="home-banner-right">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="banner-slide">
              <img src={slide.img} alt={`Slide ${index}`} className="banner-img" />
              {/* Text Box (Mobile only) */}
              <div className="banner-text-box mobile-only">
                <h1 className="banner-heading">{slide.heading}</h1>
                <p className="banner-description">{slide.desc}</p>
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
