import { useEffect, useState } from "react";
// import leaf from "../assets/leaf2.png"; 
import "./Preloader.css";

const text = "MEGHA GREEN CITY";

const Preloader = ({ onFinish }) => {
  const [phase, setPhase] = useState("enter"); // enter -> shrink

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("shrink"), 2500);
    const t2 = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

return (
  <div className={`preloader ${phase}`}>
    <div className="preloader-inner">
      <h1 className="preloader-title">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* 🌿 Leaf image */}
      {/* <img src={leaf} alt="leaf" className="preloader-leaf" /> */}
    </div>
  </div>
);
};

export default Preloader;