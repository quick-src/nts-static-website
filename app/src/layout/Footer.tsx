import React from "react";

import { routes } from "../helpers";

import "./Footer.css";

const Footer: React.FC<any> = (props) => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-links">
          <div className="company">
            <h3>Know more About us</h3>
            <a href={routes.aboutUs}>About Us</a>
          </div>
          <div className="courses">
            <h3>Services</h3>
            <a href={routes.corporateTraining}>Corporate Training Workshop</a>
            <a href={routes.onlineTraining}>Online Training</a>
            <a href={routes.certifications}>Certifications</a>
            <a href={routes.projects}>Custom Application Development</a>
            <a href={routes.itStaffing}>IT Staff Augmentation</a>
          </div>
          <div className="quick-links">
            <h3>quick links</h3>
            <a href={routes.becomeTrainer}>Become Trainer</a>
            <a href={routes.blog}>Blog</a>
          </div>
          <div className="contact-us">
            <h3>contact us</h3>
            <a href="#">+91 40485 55377</a>
            <a href="#">+91 89789 55377</a>
            <a href="#">info@nybbletechnosoft.com</a>
          </div>
        </div>
        <div className="copyright">
          <div className="content">
            Copyright © 2021 Nybble TechnoSoft.com. All Rights Reserved
          </div>
          <div className="social-links">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
