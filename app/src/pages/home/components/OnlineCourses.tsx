import React from "react";

import Pic from "../../../assets/404.png";
import CorporatePic from "../../../assets/corporate-training.jpg";
import OnlinePic from "../../../assets/online-training.jpg";
import CertificatePic from "../../../assets/certifications.jpg";
import "./Home.css";

const OnlineCourses: React.FC<any> = (props) => {
  return (
    <div className="content-section online-courses">
      <div className="container">
        <div className="title-container">
          <h1 className="title-with-underline">Online Courses</h1>
        </div>
        <div className="course-container">
          <div className="course-item">
            <div className="course-info">
              <img src={CorporatePic} alt="" className="course-image" />
              <h2 className="course-label">Corporate Training Workshop</h2>

              <p>
                A key value of corporate training is that it helps turn young
                talent into tomorrow's leaders Corporate Training is education
                activities that are focused on up-skilling your existing
                workforce.
              </p>
            </div>
            <a href="/corporate-training">View All</a>
          </div>
          <div className="course-item">
            <div className="course-info">
              <img src={OnlinePic} alt="" className="course-image" />
              <h2 className="course-label">Online Training</h2>
              <p>
                Online courses help trainees to recollect information with
                real-life examples and also understand concepts better.
                Displaying information in well-crafted ways lead to better
                understanding of learning content more than taking notes with
                pen and paper. Face-to-face instructor-led training is the major
                mode of communication.
              </p>
            </div>
            <a href="/online-training">View All</a>
          </div>
          <div className="course-item">
            <div className="course-info">
              <img src={CertificatePic} alt="" className="course-image" />
              <h2 className="course-label">Certifications</h2>
              <p>
                Certifications can differentiate you from other professionals in
                your field, showing that you have a demonstrated commitment to
                understanding and excelling in your profession. Stay on top of
                trends and learn how to use that new software or social platform
                before it becomes a household name.
              </p>
            </div>
            <a href="/certifications">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourses;
