import React from "react";

import { routes } from "../helpers";

import "./Footer.css";

const Footer: React.FC<any> = (props) => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-links">
          <div className="company">
            <h3>company</h3>
            <a href={routes.aboutUs}>About Us</a>
            <a href={routes.itStaffing}>IT Staffing</a>
            <a href={routes.projects}>Projects</a>
            <a href={routes.contactUs}>Contact Us</a>
          </div>
          <div className="courses">
            <h3>courses</h3>
            <a href={routes.corporateTraining}>Corporate Training</a>
            <a href={routes.onlineTraining}>Online Training</a>
            <a href={routes.certifications}>Certifications</a>
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
          <div className="social-links">social links</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
