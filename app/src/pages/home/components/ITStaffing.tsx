import React from "react";

import StaffingPic from "../../../assets/staffing.jpg";
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
          Our team of seasoned consultants can help your organization with an
          understanding of your organization and business needs while adhering
          to the highest level of professional standard.
          <br />
          <br />
          We provide our client with highly skilled professionals for Full time,
          Contract to Hire, Contract –Charged on actual hours worked, Contract
          –Monthly or hourly.
          <br />
          <br />
          Client will interview and select the Qualified resources based on
          requirement. Resources will directly work with client and will make
          sure on time deliverables. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </p>
        <a href="#">View All</a>
      </div>
    </div>
  );
};

export default ITStaffing;
