import React from "react";
import CountUp from "react-countup";
import { FaAward, FaUsers, FaGlobe } from "react-icons/fa";
import "./Stats.css";

const Stats = () => {
  const statsData = [
    { icon: <FaAward />, number: 10, text: "Awards Winning", suffix: "M" },
    { icon: <FaUsers />, number: 25, text: "Happy Clients", suffix: "K" },
    { icon: <FaGlobe />, number: 50, text: "Projects Completed", suffix: "+" },
  ];

  return (
    <div className="stats-section">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-box" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-content">
              <h2>
                <CountUp start={0} end={item.number} duration={3} />
                {item.suffix}
              </h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
