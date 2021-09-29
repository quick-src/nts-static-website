import React from "react";

//import CorporatePic from "../../assets/Shiksha2Rozgaar.jpg";
 import project2 from "../../assets/caspius.jpg";
// import project2 from "../../assets/lorvendrilling.jpg";

import "./InfoCard.css";

const InfoCard: React.FC<any> = (props) => {
  const { src, label, content, actionLabel, redirectURL } = props;
  return (
    <div className="info-container">
      <img src={project2} alt="" className="info-image" />
      <div className="info-content">
        <h2 className="info-label">{label}</h2>
        <p>{content}</p>
        <a href={redirectURL}>{actionLabel}</a>
      </div>

    </div>

    
  );
};

export default InfoCard;
