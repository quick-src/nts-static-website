import React from "react";

import "./Home.css";

const OnlineCourses: React.FC<any> = (props) => {
  return (
    <div className="content-section online-courses">
      <div className="title-with-underline">Online Courses</div>
      <div className="course-container">
        <div className="course-item">course 1</div>
        <div className="course-item">course 2</div>
        <div className="course-item">course 3</div>
      </div>
    </div>
  );
};

export default OnlineCourses;
