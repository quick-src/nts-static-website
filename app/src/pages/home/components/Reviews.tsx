import React from "react";
import Slider from "react-slick";

import Trainer1Pic from "../../../assets/trainer-1.png";

import "./Reviews.css";

const Reviews: React.FC<any> = (props) => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews">
      <div className="container">
        <div className="title-container">
          <h1 className="title-with-underline">Reviews</h1>
        </div>
        <div className="reviews-list">
          <Slider {...settings}>
            <div className="review-card">
              <div className="review-info">
                <img src={Trainer1Pic} alt="" className="review-pic" />
                <h3 className="review-name">Alex Lee</h3>
                <p className="review-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="review-card">
              <div className="review-info">
                <img src={Trainer1Pic} alt="" className="review-pic" />
                <h3 className="review-name">Alex Lee</h3>
                <p className="review-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="review-card">
              <div className="review-info">
                <img src={Trainer1Pic} alt="" className="review-pic" />
                <h3 className="review-name">Alex Lee</h3>
                <p className="review-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="review-card">
              <div className="review-info">
                <img src={Trainer1Pic} alt="" className="review-pic" />
                <h3 className="review-name">Alex Lee</h3>
                <p className="review-summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
