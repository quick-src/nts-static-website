import React from "react";
import Slider from "react-slick";

import Trainer1Pic from "../../../assets/trainer-1.png";

import "./Trainers.css";

const Trainers: React.FC<any> = (props) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trainers">
      <div className="container">
        <div className="title-container">
          <h1 className="title-with-underline">Nybble TechnoSoft Trainers</h1>
        </div>
        <div className="trainers-list">
          <Slider {...settings}>
            <div className="trainer-card">
              <div className="trainer-info">
                <img src={Trainer1Pic} alt="" className="trainer-pic" />
                <h3 className="trainer-name">Alex Lee</h3>
                <p className="trainer-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#">View All</a>
              </div>
            </div>
            <div className="trainer-card">
              <div className="trainer-info">
                <img src={Trainer1Pic} alt="" className="trainer-pic" />
                <h3 className="trainer-name">Alex Lee</h3>
                <p className="trainer-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#">View All</a>
              </div>
            </div>
            <div className="trainer-card">
              <div className="trainer-info">
                <img src={Trainer1Pic} alt="" className="trainer-pic" />
                <h3 className="trainer-name">Alex Lee</h3>
                <p className="trainer-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#">View All</a>
              </div>
            </div>
            <div className="trainer-card">
              <div className="trainer-info">
                <img src={Trainer1Pic} alt="" className="trainer-pic" />
                <h3 className="trainer-name">Alex Lee</h3>
                <p className="trainer-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#">View All</a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
