import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "./ContactUsContent.css";

const ContactUsContent: React.FC<any> = (pros) => {
  return (
    <div className="contact-us-content-section">
      <div className="section-one">
        <div className="address">
          <div className="address-label">
            <h1 className="title-with-underline">Address</h1>
          </div>
          <div className="address-content">
              NTS-Nybble TechnoSoft 502,<br/>
              BDR Residency MIG-2-573, Road No.1, KPHB Colony,<br/>
              Kukatpally, Hyderabad - 500072,<br/>
              Telangana, INDIA.
          </div>
          <div className="contact-info">
            <a href="#">+91 40485 55377</a>
            <a href="#">+91 89789 55377</a>
            <a href="#">info@nybbletechnosoft.com</a>
            {/* <a href="#">www.nybbletechnosoft.com</a> */}
          </div>
        </div>
        <iframe
          width="600px"
          height="400px"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <div className="section-two">
        <div className="feedback-label">
          <h1 className="title-with-underline">Feedback</h1>
        </div>
        <p className="feedback-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
        <div className="feedback-form">
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input type="text" name="phone" id="phone" placeholder="Mobile No" />
          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder="Message"
          />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
