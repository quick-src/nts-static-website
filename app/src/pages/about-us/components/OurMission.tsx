import React from "react";

import Pic from "../../../assets/bg_03.png";
import "./OurMission.css";

const OurMission: React.FC<any> = (props) => {
  return (
    <div className="our-mission-container">
      {/* <h1>ABOUT US</h1> */}
      <img src={Pic} alt="" />
      <p>
      
      <strong>IT Training & Certifications </strong> <br />
      NYBBLE TECHNOSOFT provide meticulous online training in fields such as Cyber Security, Cloud Computing, Project Management, Digital Marketing, and Data Science, among others. We focus in technologies and best practices that are changing rapidly.
      We make sure to produce qualified candidates considerably.
      NYBBLE TECHNOSOFT based in India, we have assisted more than 2K professionals get trained, acquire certifications, and improve their skills.
      Our practical and applied approach has resulted in 85 percent of learners reporting career benefits including promotions and new jobs after completing the training. 
      <br /><br />
      <strong>IT Staff Augmentation </strong><br />
      Our team of seasoned consultants can help your organization with an understanding of your organization and business needs while adhering to the highest level of professional standard
      We provide our client with highly skilled professionals for Full time, Contract to Hire, Contract –Charged on actual hours worked, Contract –Monthly or hourly.
      Client will interview and select the Qualified resources based on requirement. Resources will directly work with client and will make sure on time deliverables.

      <br /><br />
      <strong>IT Project Development </strong><br />
      We provide service to our client with all required support to accomplish large and complex projects can be a big challenge. As one of the best software development companies, we execute highly technical projects on-time, within scope, and with a lower cost.
      We work on diverse projects ranging from simple information systems and websites to complex enterprise type architectures, and desktop or web-enabled applications.
      Our work includes large-scale architectures with microservices, mobile apps, solutions based on large volumes of data, and artificial intelligence in industries as diverse as financial services, energy, retail, entertainment, telecommunications, government, and tech.

      </p>
    </div>
  );
};

export default OurMission;
