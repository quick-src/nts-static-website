import React from "react";

import ProjectsPic from "../../../assets/projects.jpg";
import "./Home.css";

const Projects: React.FC<any> = (props) => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="title">Projects</h2>
        <p className="content">
          We provide service to our client with all required support to
          accomplish large and complex projects can be a big challenge. As one
          of the best software development companies, we execute highly
          technical projects on-time, within scope, and with a lower cost.{" "}
          <br />
          <br />
          We work on diverse projects ranging from simple information systems
          and websites to complex enterprise type architectures, and desktop or
          web-enabled applications.
          <br />
          <br />
          Our work includes large-scale architectures with microservices, mobile
          apps, solutions based on large volumes of data, and artificial
          intelligence in industries as diverse as financial services, energy,
          retail, entertainment, telecommunications, government, and tech.
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
