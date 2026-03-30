import React from "react";
import "./DemoHighlight.css";

const highlights = [
  "WELCOMING ENTRANCE",
  "GYM",
  "SWIMMING POOL",
  "CAFE",
  "KIDS PLAY ZONE",
  "YOGA/MEDITATION ZONE",
  "JOGGING TRACKS",
  "SEATING PERGOLAS",
  "OPEN AIR GYM",
  "PICKLE BALL COURT",
  "TENNIS COURT",
  "HALF BASKETBALL COURT",
  "WATERBODIES & FOUNTAINS",
  "JUNIOR HIGH SCHOOL"
];

const DemoHighlight = () => {
  return (
    <section className="demohighlight">
      <div className="container">
        <h2 className="dh-heading">PROJECT HIGHLIGHTS</h2>

        <div className="dh-grid">
          {highlights.map((item, index) => (
            <div className="dh-card" key={index}>
              <span className="dh-text">{item}</span>
              <span className="dh-tick">✔</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoHighlight;