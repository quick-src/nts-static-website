import React from "react";

import Pic from "../../../assets/404.png";
import CorporatePic from "../../../assets/Image 8.png";
import OnlinePic from "../../../assets/Mask Group 2.png";
import CertificatePic from "../../../assets/Mask Group 3.png";
import "./Home.css";

const OnlineCourses: React.FC<any> = (props) => {
  return (
    <div className="content-section online-courses">
      <div className="title-container">
        <h1 className="title-with-underline">Online Courses</h1>
      </div>
      <div className="course-container">
        <div className="course-item">
          <img src={CorporatePic} alt="" className="course-image" />
          <div className="course-info">
            <h2 className="course-label">Corporate Training</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="#">View All</a>
          </div>
        </div>
        <div className="course-item">
          <img src={OnlinePic} alt="" className="course-image" />
          <div className="course-info">
            <h2 className="course-label">Online Training</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="#">View All</a>
          </div>
        </div>
        <div className="course-item">
          <img src={CertificatePic} alt="" className="course-image" />
          <div className="course-info">
            <h2 className="course-label">Certifications</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;
