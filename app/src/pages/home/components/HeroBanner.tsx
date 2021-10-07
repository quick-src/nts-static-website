import React from "react";
import Slider from "react-slick";

import "./HeroBanner.css";

const HeroBanner: React.FC<any> = (props) => {
  const settings = {
    dots: true,
  };
  return (
    <div className="hero-banner">
      <div className="container">
        <Slider {...settings}>
          <div className="slide-1">
            <h1>
              Finding the Right IT Solutions for Your Business
              <br />
              Simplify your day-to-day Business requirements
            </h1>
          </div>
          <div className="slide-1">
            <h1>
              Keep your skills updated in NTS, Reach real career growth <br />
              Get Certified, Get Ahead with Our Programs
            </h1>
          </div>
          <div className="slide-1">
            <h1>
              Flexible IT staffing to enhance your team or project
              <br />
              Start improving your Employee Experience
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;
