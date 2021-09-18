import React from "react";

import CoursesContent from "../components/CourseContent";
import Reviews from "../../home/components/Reviews";

const Courses: React.FC<any> = (props) => {
  return (
    <>
      <CoursesContent />
      <Reviews />
    </>
  );
};

export default Courses;
