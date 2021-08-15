import React from "react";

import QualityPic from "../../../assets/quality.png";
import "./Home.css";

const Why: React.FC<any> = (props) => {
  return (
    <div className="content-section why">
      <div className="title-container">
        <h1 className="title-with-underline">Why Nybble TechnoSoft</h1>
      </div>
      <div className="why-container">
        <div className="why-item">
          <img src={QualityPic} alt="" className="why-image" />
          <div className="why-info">
            <h2 className="why-label">BEST QUALITY</h2>
          </div>
        </div>
        <div className="why-item">
          <img src={QualityPic} alt="" className="why-image" />
          <div className="why-info">
            <h2 className="why-label">24/7 SERVICES</h2>
          </div>
        </div>
        <div className="why-item">
          <img src={QualityPic} alt="" className="why-image" />
          <div className="why-info">
            <h2 className="why-label">MONEY BACK GUARANTEE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
