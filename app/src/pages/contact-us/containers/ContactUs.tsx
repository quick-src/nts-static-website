import React from "react";

import ContactUsContent from "../components/ContactUsContent";
import { ContentSection } from "../../../components";

import "./ContactUs.css";

const ContactUs: React.FC<any> = (props) => {
  return (
    <>
      <div className="contact-us-container">
        <div className="container">
          <h1>Contact US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="contact-us-content">
            <ContentSection>
              <ContactUsContent />
            </ContentSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
