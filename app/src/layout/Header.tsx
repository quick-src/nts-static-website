import React from "react";

import "./Layout.css";

const Header: React.FC<any> = (props) => {
  return (
    <>
      <div className="header">
        <div className="header-logo">LOGO</div>
        <div className="header-menu">
          <div className="menu-item-active">Home</div>
          <div className="menu-item">About US</div>
          <div className="menu-item">Courses</div>
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
