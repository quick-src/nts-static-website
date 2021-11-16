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
            <a href={routes.aboutUs}>About Trainers</a>
            <a href={routes.aboutUs}>About Project Consultants</a>
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
            <h3>Courses</h3>
            <a href={routes.becomeTrainer}>Cloud Computing</a>
            <a href={routes.becomeTrainer}>DevOps</a>
            <a href={routes.becomeTrainer}>Big Data</a>
            <a href={routes.becomeTrainer}>Software Development</a>
            <a href={routes.becomeTrainer}>Salesforce</a>
            <a href={routes.becomeTrainer}>Linux</a>
            <a href={routes.becomeTrainer}>Networking</a>
            <a href={routes.becomeTrainer}>Microsoft Dynamics CRM</a>
            <a href={routes.becomeTrainer}>Mulesoft</a>
            <a href={routes.becomeTrainer}>Power BI</a>
            <a href={routes.becomeTrainer}>SAP BO</a>
            <a href={routes.becomeTrainer}>SAP BW</a>
            <a href={routes.becomeTrainer}>SAP EHS</a>
            <a href={routes.becomeTrainer}>SAP FICO</a>
          </div>
          <div className="contact-us">
            <h3>Coach with NTS</h3>
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
