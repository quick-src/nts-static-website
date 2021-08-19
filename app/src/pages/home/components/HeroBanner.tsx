import React from "react";
import Slider from "react-slick";

import "./HeroBanner.css";

const HeroBanner: React.FC<any> = (props) => {
  const settings = {
    dots: true,
  };
  return (
    <div className="hero-banner">
      <Slider {...settings}>
        <div className="slide-1">
          <h1>Learn New Skills Online Find Best Courses</h1>
        </div>
        <div className="slide-1">
          <h1>Learn New Skills Online Find Best Courses</h1>
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
