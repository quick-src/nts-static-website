import React from "react";

import ContactUs from "./ContactUs";
import Logo from "../assets/nts-logo.png";
import { routes } from "../helpers";

import "./Header.css";

const HeaderMenu: React.FC<any> = (props) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href={routes.home} className="menu-item-active">
          Home
        </a>
      </li>
      <li className="nav-item">
        <div className="menu-item">
          <div className="menu-label">Services</div>
          <div className="menu-list">
            <a href="#">Custom Application Development</a>
            <a href="#">IT Staff Augmentation</a>
            <a href="#">Online Courses</a>
            <a href="#">Certification Courses</a>
            <a href="#">Corporate Workshop / Training</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <div className="menu-item">
          <div className="menu-label">Courses</div>
          <div className="menu-list">
            <a href={routes.onlineTraining}>Online</a>
            <a href={routes.certifications}>Certifications</a>
            <a href={routes.corporateTraining}>Corporate Training</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a href={routes.aboutUs} className="menu-item">
          About Us
        </a>
      </li>
      <li className="nav-item">
        {" "}
        <a href={routes.becomeTrainer} className="menu-item">
          Coach with NTS
        </a>
      </li>
      <li className="nav-item">
        <a href={routes.blogs} className="menu-item">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href={routes.contactUs} className="menu-item">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

const Header: React.FC<any> = (props) => {
  return (
    <>
      <ContactUs />
      <div className="icon-bar">
        <a href="#" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="google">
          <i className="fa fa-google"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#" className="youtube">
          <i className="fa fa-youtube"></i>
        </a>
      </div>
      <header>
        <nav className="navbar fixed-top navbar-light desktop-device-show">
          <div className="sub-header">
            <div className="container">
              <ul>
                <li>
                  <i className="fa fa-phone" />
                  +91-89789 55377
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  info@nybbletechnosoft.com
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <a className="navbar-brand" href={routes.home}>
              <img src={Logo} alt="" className="header-logo" />
            </a>
            <HeaderMenu />
          </div>
        </nav>
        <div className="navbar fixed-top navbar-light mobile-device-show">
          <div className="sub-header">
            <ul>
              <li>+9140-48555377</li>
              <li>info@nybbletechnosoft.com</li>
            </ul>
          </div>
          <div className="container-fluid">
            <a className="navbar-brand" href={routes.home}>
              <img src={Logo} alt="" className="header-logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <HeaderMenu />
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: "108px" }}></div>
    </>
  );
};

export default Header;
