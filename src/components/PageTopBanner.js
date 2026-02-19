import React from "react";
import { Link } from "react-router-dom";
import "./PageTopBanner.css";

const PageTopBanner = ({ title, currentPage, backgroundImage }) => {
  return (
    <section
      className="pagetopbanner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="pagetopbanner-overlay"></div>

      <div className="pagetopbanner-content">
        <h1>{title}</h1>
        <p className="pagetopbanner-breadcrumb">
          <Link to="/">Home</Link> <span>&gt;</span> {currentPage}
        </p>
      </div>
    </section>
  );
};

export default PageTopBanner;
