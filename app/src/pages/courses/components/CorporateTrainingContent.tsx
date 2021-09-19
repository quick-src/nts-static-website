import React, { useState } from "react";

import CoursesContent from "./CourseContent";
import { ListSection, ContentSection } from "../../../components";

import "./CorporateTrainingContent.css";

const CorporateTrainingContent: React.FC<any> = (props) => {
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
      <div className="corporate-training">
        <div className="container">
          <h1>Courses</h1>
          <h4>Corporate Training</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="corporate-training-content">
            <div className="info-section">
              <ContentSection>
                <CoursesContent />
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

export default CorporateTrainingContent;
