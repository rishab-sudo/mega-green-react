import React, { useEffect, useRef, useState } from "react";
import "./Work.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/projects/mega-city-hd1.png";
import img2 from "../assets/projects/mega-city-hd2.png";
import img3 from "../assets/projects/mega-dream-home-hd1.png";
import img4 from "../assets/projects/mega-dream-home-hd2.png";
import img5 from "../assets/projects/mega-dream-home-hd3.png";
import img6 from "../assets/projects/mega-hieghts-hd1.png";
import img7 from "../assets/projects/mega-mension-hd1.png";
import img8 from "../assets/projects/mega-mension-hd2.png";

const images = [img1, img6, img2, img3, img4, img5, img6, img7, img8];

// 🔹 Project names (same order as images)
const projectNames = [
  "Mega City",
  "Mega Heights",
  "Mega City Phase 2",
  "Mega Dream Home",
  "Mega Dream Home Phase 2",
  "Mega Dream Home Phase 3",
  "Mega Heights",
  "Mega Mansion",
  "Mega Mansion Phase 2",
];

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

      const p = totalScroll > 0 ? scrolled / totalScroll : 0;
      setProgress(p);

      const step = 1 / images.length;
      const idx = Math.floor(p / step);

      if (idx >= 0 && idx < images.length) {
        setActiveIndex(idx);

        const local = (p - idx * step) / step;

        if (local < 0.5) {
          const t = local / 0.5;
          setScale(0.6 + t * 0.6);
          setOpacity(t);
        } else {
          const t = (local - 0.5) / 0.5;
          setScale(1.2 - t * 0.4);
          setOpacity(1 - t);
        }
      } else {
        setActiveIndex(-1);
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      <section className="work desktop-work" ref={sectionRef}>
        <div className="work-sticky">
          <div className="work-container">
            <div className="title-div">
              <h2
                className={`work-title page-heading ${
                  progress > 0.05 ? "centered" : ""
                }`}
              >
                OUR WORK
              </h2>
            </div>

            <img src={img1} alt="work1" className="work-img work-img-1" />
            <img src={img6} alt="work6" className="work-img work-img-6" />
            <img src={img2} alt="work2" className="work-img work-img-2" />
            <img src={img3} alt="work3" className="work-img work-img-3" />
            <img src={img4} alt="work4" className="work-img work-img-4" />
            <img src={img5} alt="work5" className="work-img work-img-5" />
            <img src={img7} alt="work7" className="work-img work-img-7" />
            <img src={img8} alt="work8" className="work-img work-img-8" />

            {activeIndex !== -1 && opacity > 0.05 && (
              <>
                <img
                  src={images[activeIndex]}
                  alt="work-zoom"
                  className="work-center-zoom"
                  style={{
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    opacity: opacity,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    zIndex: 11,
                    color: "#fff",
                    fontSize: "32px",
                    fontWeight: "700",
                    opacity: opacity,
                    pointerEvents: "none",
                    textShadow: "0 4px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  {projectNames[activeIndex]}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ================= MOBILE VERSION (SWIPER) ================= */}
      <section className="mobile-work">
        <h2 className="page-heading" style={{ textAlign: "center" }}>
          OUR WORK
        </h2>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}     // 👈 ONE BY ONE
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="mobile-slide">
                <img src={img} alt={projectNames[i]} />
                <div className="mobile-slide-title">
                  {projectNames[i]}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Work;