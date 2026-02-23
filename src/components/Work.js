import React, { useEffect, useRef, useState } from "react";
import "./Work.css";
import img1 from "../assets/projects/megha-dream-house.jpg";
import img2 from "../assets/projects/megha-dream-house2.jpg";
import img3 from "../assets/projects/megha-dream-house3.jpg";
import img4 from "../assets/projects/megha-mansions.jpg";
import img5 from "../assets/projects/megha-hieghts.jpg";

const images = [img1, img2, img3, img4, img5];

const Work = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // total scrollable height for this section
      const totalScroll = section.offsetHeight - vh;
      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        totalScroll
      );

      const p = scrolled / totalScroll; // 0 → 1
      setProgress(p);

      // divide scroll into steps per image
      const step = 1 / images.length;
      const index = Math.floor(p / step);

      if (index >= 0 && index < images.length) {
        setActiveIndex(index);
      } else {
        setActiveIndex(-1);
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
          <h2
            className={`work-title ${progress > 0.05 ? "centered" : ""}`}
          >
           OUR WORK<span></span>
          </h2>

          {/* Images */}
          <img
            src={img1}
            alt="work1"
            className={`work-img work-img-1 ${
              activeIndex === 0 ? "active" : ""
            }`}
          />
          <img
            src={img2}
            alt="work2"
            className={`work-img work-img-2 ${
              activeIndex === 1 ? "active" : ""
            }`}
          />
          <img
            src={img3}
            alt="work3"
            className={`work-img work-img-3 ${
              activeIndex === 2 ? "active" : ""
            }`}
          />
          <img
            src={img4}
            alt="work4"
            className={`work-img work-img-4 ${
              activeIndex === 3 ? "active" : ""
            }`}
          />
          <img
            src={img5}
            alt="work5"
            className={`work-img work-img-5 ${
              activeIndex === 4 ? "active" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;