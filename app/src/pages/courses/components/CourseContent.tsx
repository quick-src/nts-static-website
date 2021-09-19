import React from "react";

import "./CorporateTrainingContent.css";

const Section1: React.FC<any> = (props) => {
  return (
    <div className="section1-container">
      <h1>Soft skills training</h1>
      <div className="skill-details">
        <div className="skill-detail-item">
          <span className="label">Enrolled:</span>
          <span className="value">1200 Students</span>
        </div>
        <div className="skill-detail-item">
          <span className="label">Duration:</span>
          <span className="value">2 Hours</span>
        </div>
        <div className="skill-detail-item">
          <span className="label">Trainers:</span>
          <span className="value">8</span>
        </div>
      </div>

      <h2 className="title-with-underline">Description</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Section1;
