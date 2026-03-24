import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">

      {/* ===== Banner Section ===== */}
      <div className="gallery-banner">
        <div className="  gallery-overlay">
          <h1 className="">Gallery</h1>
       <div className="line-container">
  <div className="moving-line"></div>
</div>
        </div>
      </div>

      {/* ===== SECTION 1 ===== */}
      <div className="gallery-content">
        <div className="gallery-container">
          <h2>A Visual Journey into Modern Serenity and Balance</h2>
          <p>
            Explore the spaces, textures, and moments that define EUNOEA — a calm sanctuary shaped with intention.
          </p>

          <div className="gallery-grid">
            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img1" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img2" alt="mega-green-city-gallery"/>
            </div>

            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img3" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img4" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img5" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img6" alt="mega-green-city-gallery"/>
            </div>

            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img7" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img8" alt="mega-green-city-gallery"/>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="gallery-content">
        <div className="gallery-container">
          <h2>Refined Spaces & Thoughtful Living</h2>
          <p>
            A continuation of elegance — where every detail reflects sophistication and calmness.
          </p>

          <div className="gallery-grid">
            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img1" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img2" alt="mega-green-city-gallery"/>
            </div>

            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img3" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img4" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img5" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img6" alt="mega-green-city-gallery"/>
            </div>

            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img7" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img8" alt="mega-green-city-gallery"/>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3 ===== */}
      <div className="gallery-content">
        <div className="gallery-container">
          <h2>Moments of Balance & Harmony</h2>
          <p>
            Designed to inspire — a seamless blend of architecture and peaceful living.
          </p>

          <div className="gallery-grid">
            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img1" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img2" alt="mega-green-city-gallery"/>
            </div>

            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img3" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img4" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img5" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img6" alt="mega-green-city-gallery"/>
            </div>

            <div className="gallery-col">
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img7" alt="mega-green-city-gallery"/>
              <img src={require("../assets/mock-gallery.jpg")} className="gallery-section1-img gallery-section1-img8" alt="mega-green-city-gallery"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;