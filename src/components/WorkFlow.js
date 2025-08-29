import React from "react";
import "./WorkFlow.css";
import { FaTools, FaRocket, FaLightbulb } from "react-icons/fa";

const WorkFlow = () => {
  return (
    <div className="work-section">
      <h2 className="work-heading">How It Works</h2>

      {/* Horizontal line behind cards */}
      <div className="work-hline"></div>

      <div className="work-boxes">
        {/* Box 1 */}
        <div className="work-box">
          <div className="work-arc work-arc-tl">
            <FaTools />
          </div>
          <div className="work-arc work-arc-br"></div>

          <div className="work-content">
            <h3>Development</h3>
            <p>We build scalable and efficient solutions tailored to your needs.</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="work-box">
          <div className="work-arc work-arc-tl">
            <FaRocket />
          </div>
          <div className="work-arc work-arc-br"></div>

          <div className="work-content">
            <h3>Launch</h3>
            <p>Quick deployment strategies to get your product live faster.</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="work-box">
          <div className="work-arc work-arc-tl">
            <FaLightbulb />
          </div>
          <div className="work-arc work-arc-br"></div>

          <div className="work-content">
            <h3>Innovation</h3>
            <p>Creative ideas to keep your business ahead of the curve.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
