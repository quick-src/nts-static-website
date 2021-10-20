import React from "react";

import StaffingPic from "../../../assets/it-staffing.jpg";
import "./Home.css";

const ITStaffing: React.FC<any> = (props) => {
  return (
    <div className="it-staffing-container">
      <div className="it-staffing-image">
        <img src={StaffingPic} alt="" width="100%" height="100%" />
      </div>
      <div className="it-staffing-content">
        <h2 className="title">IT Staffing</h2>
        <p className="content">
          We are ready to provide assistance when you need it, ensuring you
          always have an on-call selection of experts as your situation
          dictates. Our IT staff augmentation services can lend unparalleled
          knowledge and guidance to your resource base, giving you the
          flexibility to adapt to an ever-changing competitive landscape.
        </p>
        <a href="#">View All</a>
      </div>
    </div>
  );
};

export default ITStaffing;
