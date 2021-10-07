import React from "react";

import Logo from "../assets/Logo.svg";
import { routes } from "../helpers";

import "./Header.css";

const Header: React.FC<any> = (props) => {
  return (
    <>
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
                <li>+91 12345 78910</li>
                <li>training@nybbletechnosoft.com</li>
              </ul>
            </div>
          </div>
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
                  <div className="menu-label">Services</div>
                  <div className="menu-list">
                    <a href={routes.itStaffing}>IT Staffing</a>
                    <a href={routes.projects}>Projects</a>
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
                <a href={routes.blogs} className="menu-item">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a href={routes.becomeTrainer} className="menu-item">
                  Become Trainer
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
          </div>
        </nav>
        <div className="navbar fixed-top navbar-light mobile-device-show">
          <div className="sub-header">
            <ul>
              <li>+91 12345 78910</li>
              <li>training@nybbletechnosoft.com</li>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href={routes.home} className="menu-item-active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <div className="menu-item">
                    <div className="menu-label">Services</div>
                    <div className="menu-list">
                      <a href={routes.itStaffing}>IT Staffing</a>
                      <a href={routes.projects}>Projects</a>
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
                  <a href={routes.blogs} className="menu-item">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a href={routes.becomeTrainer} className="menu-item">
                    Become Trainer
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
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: "143px" }}></div>
    </>
  );
};

export default Header;
