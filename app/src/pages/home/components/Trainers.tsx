import React from "react";
import Slider from "react-slick";

import Trainer1Pic from "../../../assets/user1.png";
import Trainer2Pic from "../../../assets/user2.png";

import "./Trainers.css";

const Trainers: React.FC<any> = (props) => {
  const settings = {
    dots: true,
    slidesToShow: 2,
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
          <h1 className="title-with-underline">Our Experts</h1>
        </div>
        <div className="trainers-list">
          <Slider {...settings}>
            <div className="trainer-card">
              <div className="trainer-info">
                <img src={Trainer1Pic} alt="" className="trainer-pic" />
                <h3 className="trainer-name">Himanshu Sharma</h3>
                <p className="trainer-summary">
                  Cloud Solutions Architect with 10 years of experience. Expert
                  in migration of applications to Public Clouds like AWS, Azure
                  and also Implementation of Micro services on Kubernetes
                </p>
                <a href="#">View All</a>
              </div>
              
            </div>
            <div className="trainer-card">
              <div className="trainer-info">
                <img src={Trainer2Pic} alt="" className="trainer-pic" />
                <h3 className="trainer-name">Srikanth</h3>
                <p className="trainer-summary">
                  DevOps Consultant with 8 years of experience in Aws, Jenkins
                  Pipelines, python, shell, Linux, grafana, teamcity, gitlab,
                  GitHub, chef, Ansible, Elk
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
