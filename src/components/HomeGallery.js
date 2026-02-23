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

const projects = [
  {
    img: require("../assets/projects/megha-city1.jpg"),
    title: "Mega City ",
  },
  {
    img: require("../assets/projects/megha-city2.jpg"),
    title: "Mega City ",
  },
  {
    img: require("../assets/projects/megha-dream-house.jpg"),
    title: "Mega Dream Homes ",
  },
  {
    img: require("../assets/projects/megha-dream-house2.jpg"),
    title: "Mega Dream Home ",
  },
  {
    img: require("../assets/projects/megha-dream-house3.jpg"),
    title: "Mega Dream Homes",
  },
  {
    img: require("../assets/projects/megha-dream-house4.jpg"),
    title: "Mega Dream Homes ",
  },
  {
    img: require("../assets/projects/megha-hieghts.jpg"),
    title: "Mega Heights",
  },
  {
    img: require("../assets/projects/megha-mansions.jpg"),
    title: "Mega Mansions",
  },
    {
    img: require("../assets/projects/megha-mension2.jpg"),
    title: "Mega Mansions ",
  },
];
  return (
    <section className="homeGallery">
      <h2 className="homeGallery-title">Our compeleted projects</h2>
      <Slider {...settings} className="homeGallery-slider">
       {projects.map((item, index) => (
  <div key={index} className="homeGallery-item">
    <img src={item.img} alt={item.title} />
    <h4 className="homeGallery-item-title">{item.title}</h4>
  </div>
))}
      </Slider>
    </section>
  );
};

export default HomeGallery;
