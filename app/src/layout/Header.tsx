import React from "react";

import Logo from "../assets/Logo.svg";
import { routes } from "../helpers";

import "./Header.css";

const Header: React.FC<any> = (props) => {
  return (
    <>
      <header>
        <nav className="navbar fixed-top navbar-light  desktop-device-show">
          <div className="container-fluid">
            <a className="navbar-brand" href={routes.home}>
              <img src={Logo} alt="" className="header-logo" />
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href={routes.home} className="menu-item-active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <div className="menu-item">
                  <div className="menu-label">Company</div>
                  <div className="menu-list">
                    <a href={routes.aboutUs}>About Us</a>
                    <a href={routes.itStaffing}>IT Staffing</a>
                    <a href={routes.projects}>Projects</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="menu-item">
                  <div className="menu-label">Courses</div>
                  <div className="menu-list">
                    <a href={routes.corporateTraining}>Corporate Training</a>
                    <a href={routes.onlineTraining}>Online Training</a>
                    <a href={routes.certifications}>Certifications</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                {" "}
                <a href={routes.becomeTrainer} className="menu-item">
                  Become Trainer
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href={routes.blog} className="menu-item">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href={routes.contactUs} className="menu-item">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href={routes.home} className="sign-up">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a href={routes.home} className="login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="navbar navbar-expand-md navbar-dark mobile-device-show">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="menu-item-active">Home</div>
                </li>
                <li className="nav-item">
                  <div className="menu-item">
                    <div className="menu-label">Company</div>
                    <div className="menu-list">
                      <a href={routes.home}>About Us</a>
                      <a href={routes.home}>IT Staffing</a>
                      <a href={routes.home}>Projects</a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="menu-item">
                    <div className="menu-label">Courses</div>
                    <div className="menu-list">
                      <a href={routes.home}>Corporate Training</a>
                      <a href={routes.home}>Online Training</a>
                      <a href={routes.home}>Certifications</a>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="menu-item">Become Trainer</div>
                </li>
                <li>
                  {" "}
                  <div className="menu-item">Blog</div>
                </li>
                <li>
                  <div className="menu-item">Contact Us</div>
                </li>
                <li>
                  <div className="sign-up">Sign Up</div>
                </li>
                <li>
                  <div className="login">Login</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: "107px" }}></div>
    </>
  );
};

export default Header;
