import React from "react";

import "./ContentSection.css";

const ContentSection: React.FC<any> = (props) => {
  const { children } = props;
  return <div className="content-container">{children}</div>;
};

export default ContentSection;
