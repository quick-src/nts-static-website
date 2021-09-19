import React from "react";

import { InfoCard } from "../../../components";
import { projects } from "./helpers";

import "./Projects.css";

const Projects: React.FC<any> = (props) => {
  return (
    <>
      <div className="projects">
        <div className="container">
          <h1>Projects</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="projects-content">
            {projects?.map((project: any) => {
              return (
                <InfoCard
                  {...{
                    ...project,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
