import React, { useState } from "react";

import Section1 from "./Section1";
import { ListSection, ContentSection } from "../../../components";

import "./ITStaffingContent.css";

const ITStaffingContent: React.FC<any> = (props) => {
  const list = [
    {
      key: "OUR_MISSION",
      label: "Large talent pool of IT professionals",
    },
    {
      key: "OUR_VISION",
      label: "Resumes in hand within 24-48 hours",
    },
    {
      key: "CEO_MESSAGE",
      label: "Direct Placement",
    },
    {
      key: "CEO_MESSAGE2",
      label: "Short or long term IT resources",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(list[0]?.key);

  return (
    <>
      <div className="it-staffing">
        <div className="container">
          <h1 className="header-label">IT Staffing</h1>
          <p className="description-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="it-staffing-content">
            <div className="info-section">
              <ContentSection>
                <Section1 />
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

export default ITStaffingContent;
