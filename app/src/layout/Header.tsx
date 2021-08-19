import React from "react";

import Logo from "../assets/Logo.svg";

import "./Layout.css";

const Header: React.FC<any> = (props) => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="" className="header-logo" />
        <div className="header-menu">
          <div className="menu-item-active">Home</div>
          <div className="menu-item">About US</div>
          <div className="menu-item">
            <div className="menu-label">Courses</div>
            <div className="menu-list">
              <a href="#">Corporate Training</a>
              <a href="#">Online Training</a>
              <a href="#">Certifications</a>
            </div>
          </div>
          <div className="menu-item">IT Staffing</div>
          <div className="menu-item">Projects</div>
          <div className="menu-item">Become Trainer</div>
          <div className="menu-item">Blog</div>
          <div className="menu-item">Contact Us</div>
          <div className="sign-up">Sign Up</div>
          <div className="login">Login</div>
        </div>
      </div>
      <div style={{ height: "120px" }}></div>
    </>
  );
};

export default Header;
