import React from "react";

import GoogleClientPic1 from "../../../assets/client1.png";
import GoogleClientPic2 from "../../../assets/client2.png";
import GoogleClientPic3 from "../../../assets/client3.png";

import "./Home.css";

const Clients: React.FC<any> = (props) => {
  return (
    <div className="content-section clients">
      <div className="container" style={{ padding: "0px 15px" }}>
        <div className="title-container">
          <h1 className="title-with-underline">Our Clients</h1>
        </div>
        <div className="row col-md-12">
            <div className="col-md-2">
              <img src={GoogleClientPic1} alt="" />
            </div>
            <div className="col-md-2">
              <img src={GoogleClientPic2} alt="" />
            </div>
            <div className="col-md-2">
              <img src={GoogleClientPic3} alt="" />              
            </div>
            <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
