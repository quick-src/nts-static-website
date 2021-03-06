import React from "react";

import PageNotFoundPic from "../../../assets/404.png";
import "./PageNotFound.css";

const PageNotFound: React.FC<any> = (props) => {
  return (
    <div className="page-not-found">
      <img src={PageNotFoundPic} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
