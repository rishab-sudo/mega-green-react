import React from "react";
import { useNavigate } from "react-router-dom";
import "./StickyBanner.css";

const StickyBanner = ({ image, title, currentPage }) => {
  const navigate = useNavigate();

  return (
    <div
      className="sticky-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="sticky-overlay">
        <h1>{title}</h1>

        {/* Breadcrumb */}
        <p className="sticky-breadcrumb">
          <span onClick={() => navigate("/")}>Home</span> &gt; {currentPage}
        </p>

        {/* Rounded Line */}
        <div className="line-container">
          <div className="moving-line"></div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;