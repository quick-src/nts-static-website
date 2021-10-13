import React from "react";
import Slider from "react-slick";

import "./HeroBanner.css";

const HeroBanner: React.FC<any> = (props) => {
  const settings: any = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="hero-banner">
      <div className="slider-bg" > 
        <span>Innovating * Consulting * Kting </span>
      </div>
      <Slider {...settings}>
        
        <div className="slide-1">
          <div className="container">
            <h1>
              Finding the Right IT Solutions for Your Business
              <br />
              Simplify your day-to-day Business requirements
            </h1>
          </div>
        </div>
        <div className="slide-2">
          <div className="container">
            <h1>
              Keep your skills updated in NTS, Reach real career growth <br />
              Get Certified, Get Ahead with Our Programs
            </h1>
          </div>
        </div>
        <div className="slide-3">
          <div className="container">
            <h1>
              Flexible IT staffing to enhance your team or project
              <br />
              Start improving your Employee Experience
            </h1>
          </div>
        </div>
      </Slider>


      
    </div>


  );
};

export default HeroBanner;
