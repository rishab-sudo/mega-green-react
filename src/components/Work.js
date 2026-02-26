import React, { useEffect, useRef, useState } from "react";
import "./Work.css";
import img1 from "../assets/projects/megha-dream-house.jpg";
import img2 from "../assets/projects/megha-dream-house2.jpg";
import img3 from "../assets/projects/megha-dream-house3.jpg";
import img4 from "../assets/projects/megha-mansions.jpg";
import img6 from "../assets/projects/megha-dream-house4.jpg";
import img5 from "../assets/projects/megha-hieghts.jpg";

const images = [img1, img6, img2, img3, img4, img5];

const Work = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // center zoom states
  const [activeIndex, setActiveIndex] = useState(-1);
  const [scale, setScale] = useState(0.6);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const totalScroll = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

      const p = totalScroll > 0 ? scrolled / totalScroll : 0; // 0 → 1
      setProgress(p);

      // which image segment
      const step = 1 / images.length;
      const idx = Math.floor(p / step);

      if (idx >= 0 && idx < images.length) {
        setActiveIndex(idx);

        // local progress inside this image (0 → 1)
        const local = (p - idx * step) / step;

        // first half zoom-in, second half zoom-out
        if (local < 0.5) {
          const t = local / 0.5; // 0 → 1
          setScale(0.6 + t * 0.6); // 0.6 → 1.2
          setOpacity(t); // 0 → 1
        } else {
          const t = (local - 0.5) / 0.5; // 0 → 1
          setScale(1.2 - t * 0.4); // 1.2 → 0.8
          setOpacity(1 - t); // 1 → 0
        }
      } else {
        // outside range → show only initial layout
        setActiveIndex(-1);
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="work" ref={sectionRef}>
      <div className="work-sticky">
        <div className="work-container">
          {/* Title */}
          <div className="title-div">
            <h2
              className={`work-title page-heading ${
                progress > 0.05 ? "centered" : ""
              }`}
            >
              OUR WORK<span></span>
            </h2>
          </div>

          {/* 🔹 Initial layout images (UNCHANGED) */}
          <img src={img1} alt="work1" className="work-img work-img-1" />
          <img src={img6} alt="work6" className="work-img work-img-6" />
          <img src={img2} alt="work2" className="work-img work-img-2" />
          <img src={img3} alt="work3" className="work-img work-img-3" />
          <img src={img4} alt="work4" className="work-img work-img-4" />
          <img src={img5} alt="work5" className="work-img work-img-5" />

          {/* 🔹 Center zoom image (ONLY this animates) */}
          {activeIndex !== -1 && (
            <img
              src={images[activeIndex]}
              alt="work-zoom"
              className="work-center-zoom"
              style={{
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity: opacity,
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;