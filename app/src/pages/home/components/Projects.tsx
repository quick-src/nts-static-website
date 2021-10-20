import React from "react";

import ProjectsPic from "../../../assets/projects.jpg";
import "./Home.css";

const Projects: React.FC<any> = (props) => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="title">Custom Application Development</h2>
        <p className="content">
          NTS helps to create value in digital transformation — not just by
          developing cutting-edge technology, but also by helping make strong
          products more relevant to digitally-savvy consumers. We help customers
          re-imagine their business, consumer interactions, and develop
          innovative products and services, with an accelerated time-to-market.
        </p>
        <a href="#">View All</a>
      </div>

      <div className="projects-image">
        <img src={ProjectsPic} alt="" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Projects;
