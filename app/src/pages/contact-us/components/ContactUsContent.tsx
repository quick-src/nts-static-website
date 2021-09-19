import React from "react";

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
            3691 Holt Street, Boynton Beach FL, Florida - 33435
          </div>
        </div>
        <div>
          <iframe
            width="600px"
            height="400px"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
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
        <div className="feedback-form"></div>
      </div>
    </div>
  );
};

export default ContactUsContent;
