import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ProjectPageBanner.css";

const subHeadings = [
  "Where Modern Living Meets Nature",
  "A Perfect Blend of Comfort and Sustainability",
  "Crafted for a Better Lifestyle",
  "Future-Ready Living Spaces",
];

const MAIN_TITLE = "MEGA GREEN CITY";

const ProjectPageBanner = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Start title animation after 1 sec
  useEffect(() => {
    const t1 = setTimeout(() => {
      setShowTitle(true);
    }, 1000);

    // Show subheading after title animation finishes
    // (roughly letters * delay)
    const t2 = setTimeout(() => {
      setShowSub(true);
    }, 1000 + MAIN_TITLE.length * 80 + 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Subheading fade loop (only after it's visible)
  useEffect(() => {
    if (!showSub) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % subHeadings.length);
        setFade(true);
      }, 500);
    }, 2100);

    return () => clearInterval(interval);
  }, [showSub]);

  return (
    <section className="projectpagebanner">
      <video
        className="projectpagebanner-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={require("../assets/video/Mega Web Video (2).mp4")}
          type="video/mp4"
        />
      </video>

      <div className="projectpagebanner-overlay"></div>

      <div className="projectpagebanner-content">
        <Container className="projectpagebanner-inner">
          <div className="banner-center">
            {/* Main Title */}
            <h1 className="banner-main-title">
              {MAIN_TITLE.split("").map((char, i) => (
                <span
                  key={i}
                  className={`title-letter ${showTitle ? "show" : ""}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            {showSub && (
              <p className={`banner-subtitle page-subheading ${fade ? "fade-in" : "fade-out"}`}>
                {subHeadings[index]}
              </p>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProjectPageBanner;