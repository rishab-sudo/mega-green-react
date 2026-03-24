import React, { useEffect, useRef, useState } from "react";
import "./HomeResidence.css";

const HomeResidence = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();

    const sectionCenter = rect.top + rect.height / 2;
    const screenCenter = window.innerHeight / 2;

    const threshold = 80; // adjust sensitivity

    if (Math.abs(sectionCenter - screenCenter) < threshold) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section className="home-res-section" ref={sectionRef}>
      <div className="container-fluid">
        <div className="container text-center home-res-content">
          <h2 className="home-res-heading">Luxury Home Residence</h2>
          <p className="home-res-desc">
            Experience modern living with elegant architecture and premium
            lifestyle spaces designed for comfort, beauty, and functionality.
          </p>
        </div>

        {/* GRID */}
        <div className={`home-res-grid ${active ? "active" : ""}`}>
          
          {/* COL 1 */}
          <div className="home-res-col col-1">
            <img src="https://picsum.photos/500/500?1" alt="" />
          </div>

          {/* COL 2 */}
          <div className="home-res-col col-2">
            <img src="https://picsum.photos/300/300?2" alt="" />
            <img src="https://picsum.photos/300/270?3" alt="" />
          </div>

          {/* COL 3 (CENTER) */}
    {/* COL 3 (CENTER) */}
<div className="home-res-col col-3">
  <img src="https://picsum.photos/300/500?4" alt="" />

  {/* 🔥 OVERLAY CONTENT */}
  <div className={`center-overlay ${active ? "show" : ""}`}>
    <p>
Every residence at EUNOEA Living is designed as a quiet retreat — where natural light, soft materials, and flowing space create a sense of effortless harmony. Open layouts blur the boundaries between inside and out, inviting the calm rhythm of nature into daily life.</p>
    <button className="floor-btn"> <span>Floor Plans</span></button>
  </div>
</div>

          {/* COL 4 */}
          <div className="home-res-col col-4">
            <img src="https://picsum.photos/300/270?5" alt="" />
            <img src="https://picsum.photos/300/300?6" alt="" />
          </div>

          {/* COL 5 */}
          <div className="home-res-col col-5">
            <img src="https://picsum.photos/500/500?7" alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeResidence;