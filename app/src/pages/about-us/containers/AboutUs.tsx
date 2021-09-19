import React, { useState } from "react";

import OurMission from "../components/OurMission";
import { ListSection, ContentSection } from "../../../components";

import "./AboutUs.css";

const Home: React.FC<any> = (props) => {
  const list = [
    {
      key: "OUR_MISSION",
      label: "Our Mission",
    },
    {
      key: "OUR_VISION",
      label: "Our Vision",
    },
    {
      key: "CEO_MESSAGE",
      label: "CEO Message",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(list[0]?.key);

  return (
    <>
      <div className="about-us">
        <div className="container">
          <h1>About US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
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
