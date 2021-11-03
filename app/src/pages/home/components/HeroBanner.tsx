import React from "react";
import Slider from "react-slick";

import Icon1 from "../../../assets/Customer Engagement.png";
import Icon2 from "../../../assets/Service Offering.png";
import Icon3 from "../../../assets/Agility.png";
import Icon4 from "../../../assets/Design Experience Points.png";
import Icon5 from "../../../assets/Efficiency Reduced Cost.png";
import Icon6 from "../../../assets/Scalability.png";
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
        <a className="hot-requirements">
          Hot requirements ! <br />
          <small className="hot-requirements-small"> Read more </small>
        </a>
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
        <div className="title-container">
          <h1 className="title-with-underline">Why NTS?</h1>
        </div>
        <div className="why-nyt-section">
          <div className="why-icon">
            <img src={Icon1} alt="" />
            <p>Customer Engagement</p>
          </div>
          <div className="why-icon">
            <img src={Icon2} alt="" />
            <p>Service Offering</p>
          </div>          
          <div className="why-icon">
            <img src={Icon3} alt="" />
            <p>Agility</p>
          </div>
          <div className="why-icon">
            <img src={Icon4} alt="" />
            <p>Design Experience Points</p>
          </div>
          <div className="why-icon">
            <img src={Icon5} alt="" />
            <p>Efficiency Reduced Cost</p>
          </div>
          <div className="why-icon">
            <img src={Icon6} alt="" />
            <p>Scalability</p>
          </div>
          <div className="why-icon"></div>
          <div className="why-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
