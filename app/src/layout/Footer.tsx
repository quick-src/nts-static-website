import React from "react";

import "./Layout.css";

const Footer: React.FC<any> = (props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="company">
          <h3>company</h3>
          <a href="#">About Us</a>
          <a href="#">IT Staffing</a>
          <a href="#">Projects</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="courses">
          <h3>courses</h3>
          <a href="#">Corporate Training</a>
          <a href="#">Online Training</a>
          <a href="#">Certifications</a>
        </div>
        <div className="quick-links">
          <h3>quick links</h3>
          <a href="#">Become Trainer</a>
          <a href="#">Blog</a>
        </div>
        <div className="contact-us">
          <h3>contact us</h3>
          <a href="#">+12345678910</a>
          <a href="#">info@domain.com</a>
        </div>
      </div>
      <div className="copyright">
        <div className="content">
          Copyright © 2021 Nybble TechnoSoft.com. All Rights Reserved
        </div>
        <div className="social-links">social links</div>
      </div>
    </div>
  );
};

export default Footer;
