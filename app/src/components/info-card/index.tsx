import React from "react";

import CorporatePic from "../../assets/Image 8.png";

import "./InfoCard.css";

const InfoCard: React.FC<any> = (props) => {
  const { src, label, content, actionLabel, redirectURL } = props;
  return (
    <div className="info-container">
      <img src={CorporatePic} alt="" className="info-image" />
      <div className="info-content">
        <h2 className="info-label">{label}</h2>
        <p>{content}</p>
        <a href={redirectURL}>{actionLabel}</a>
      </div>
    </div>
  );
};

export default InfoCard;
