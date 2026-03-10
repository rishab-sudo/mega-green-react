import React from "react";
import "./DownloadBrochure.css";

const DownloadBrochure = () => {

  const openPDF = () => {
    window.open("/MegaGreenCity-Brochure.pdf", "_blank");
  };

  return (
    <div className="brochure-wrapper">
      <button className="brochure-btn" onClick={openPDF}>
        Download Brochure
      </button>
    </div>
  );
};

export default DownloadBrochure;