import React, { useState, useEffect } from "react";
import "./AboutDemo.css";

const AboutDemo = () => {
  // Array of images for the slideshow
  const row1Images = [
    require("../assets/gallery/mhGallery-1.png"),
    require("../assets/gallery/mhGallery-2.png"),
   
  ];

  const row2Images = [
    require("../assets/gallery/mhGallery-3.png"),
    require("../assets/gallery/mhGallery-5.png"),
   
  ];

  const [row1Index, setRow1Index] = useState(0);
  const [row2Index, setRow2Index] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRow1Index((prev) => (prev + 1) % row1Images.length);
      setRow2Index((prev) => (prev + 1) % row2Images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="aboutdemo-section">
      {/* Row 1: Image Left - Text Right */}
      <div className="aboutdemo-row">
        <div className="aboutdemo-img aboutdemo-img1 fade-up">
          <img
            key={row1Index} // key to trigger fade animation
            className="fade-img"
            src={row1Images[row1Index]}
            alt="About Us"
          />
        </div>
        <div className="aboutdemo-box">
          <h2>Building Dreams, Creating Communities</h2>
          <p>
        We are committed to delivering more than just homes—we build lifestyles. Every project reflects our dedication to quality, innovation, and sustainable development. By combining modern architecture with thoughtful planning,
         we create communities where families thrive and futures grow.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left - Image Right */}
      <div className="aboutdemo-row">
        <div className="aboutdemo-box">
          <h2>Trust, Transparency & Excellence</h2>
          <p>
     Our foundation is built on values that matter most in real estate: trust, transparency, and customer satisfaction. From the first consultation to handing over the keys, we ensure a seamless experience with clear communication and
      uncompromising excellence in every detail.
          </p>
        </div>
        <div className="aboutdemo-img aboutdemo-img2 demoabout fade-up">
          <img
            key={row2Index}
            className="fade-img"
            src={row2Images[row2Index]}
            alt="Our Mission"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDemo;
