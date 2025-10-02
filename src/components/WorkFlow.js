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
            <h3>Consult</h3>
            <p>Understand client needs and match them with the perfect property.</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="work-box">
          <div className="work-arc work-arc-tl">
            <FaRocket />
          </div>
          <div className="work-arc work-arc-br"></div>

          <div className="work-content">
            <h3>Guide</h3>
            <p>QProvide transparent pricing, legal support, & expert advice.</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="work-box">
          <div className="work-arc work-arc-tl">
            <FaLightbulb />
          </div>
          <div className="work-arc work-arc-br"></div>

          <div className="work-content">
            <h3>Support</h3>
            <p>Assist clients post-purchase for smooth handover & satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
