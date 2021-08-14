import React from "react";

import "./Home.css";

const Clients: React.FC<any> = (props) => {
  return (
    <div className="content-section clients">
      <div className="title-container">
        <h1 className="title-with-underline">Our Clients</h1>
      </div>
      <div className="client-logos-container"></div>
    </div>
  );
};

export default Clients;
