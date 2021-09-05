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
              Learn New Skills Online
              <br /> Find Best Courses
            </h1>
          </div>
          <div className="slide-1">
            <h1>
              Learn New Skills Online
              <br /> Find Best Courses
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;
