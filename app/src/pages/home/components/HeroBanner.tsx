import React from "react";
import Slider from "react-slick";

import Icon from "../../../assets/nts-logo.png";
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
    <div>
      <div className="slider-bg-top">
        <a className="rainbow rainbow-5">Hot requirements! </a>
      </div>
      <div className="hero-banner">
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
      <div className="slider-bg-bottom">
        <div className="why-nyt-section">
          <div className="why-icon">
            <img src={Icon} alt="" />
            <p>Nybble technosoft</p>
          </div>
          <div className="why-icon">
            <img src={Icon} alt="" />
            <p>Nybble technosoft</p>
          </div>
          <div className="why-icon">
            <img src={Icon} alt="" />
            <p>Nybble technosoft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
