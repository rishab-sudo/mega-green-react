import React, { useEffect, useState } from "react";
import { FaWhatsapp, } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import "./AppButtons.css";

const AppButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "91"; // change number
    const message = "Hello, I want to know more.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButtons) return null;

  return (
    <div className="app-buttons">
      <button className="whatsapp-btn" onClick={handleWhatsApp}>
        <FaWhatsapp />
      </button>

      <button className="top-btn" onClick={scrollToTop}>
        <MdArrowUpward style={{fontWeight:"600", fontSize:"25px"}}/>
      </button>
    </div>
  );
};

export default AppButtons;
