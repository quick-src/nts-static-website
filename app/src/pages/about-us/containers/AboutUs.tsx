import React, { useState } from "react";

import OurMission from "../components/OurMission";
import { ListSection, ContentSection } from "../../../components";

import "./AboutUs.css";

const Home: React.FC<any> = (props) => {
  const list = [
    {
      key: "IT Training & Certifications",
      label: "IT Training & Certifications",
    },
    {
      key: "IT Staff Augmentation",
      label: "IT Staff Augmentation",
    },
    {
      key: "IT Project Development",
      label: "IT Project Development",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(list[0]?.key);

  return (
    <>
      <div className="about-us">
        <div className="container">
          <h1>About US</h1>
          <p>
            <strong>Company Overview </strong>
          </p>
          <p>
            NYBBLE TECHNOSOFT is a India based company founded in 2017 that has improved the skills of many IT professionals through IT Training of Latest technologies, worked closely with small, medium, large enterprises to have highly skilled professionals and vital part in enterprise business applications deployment, cloud migration, and data engineering{" "}
          </p>
          <div className="about-us-content">
            <div className="info-section">
              <ContentSection>
                <OurMission />
              </ContentSection>
            </div>
            <div className="list-section">
              <ListSection
                {...{
                  list,
                  selectedItem,
                  setSelectedItem,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
