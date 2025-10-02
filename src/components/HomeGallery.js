import React from "react";
import Slider from "react-slick";
import "./HomeGallery.css";

const HomeGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3, // number of images visible
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
   require("../assets/gallery/mhGallery-1.png"),
  require("../assets/gallery/mhGallery-2.png"),
    require("../assets/gallery/mhGallery-3.png"),
      require("../assets/gallery/mhGallery-4.png"),
       require("../assets/gallery/mhGallery-5.png"),
   
  ];

  return (
    <section className="homeGallery">
      <h2 className="homeGallery-title">Our Gallery</h2>
      <Slider {...settings} className="homeGallery-slider">
        {images.map((img, index) => (
          <div key={index} className="homeGallery-item">
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeGallery;
