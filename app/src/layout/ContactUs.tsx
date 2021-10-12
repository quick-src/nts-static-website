import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";

import "./ContactUs.css";

const ContactUs: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const chatBox: any = document.getElementById("chatBox");
    if (isOpen) {
      chatBox.style.display = "block";
    } else {
      chatBox.style.display = "none";
    }
  }, [isOpen]);

  return (
    <div>
      <div
        id="chat-circle"
        className="btn btn-raised"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div id="chat-overlay"></div>
        <i className="fa fa-phone"></i>
      </div>

      <div id="chatBox" className="chat-box">
        <div className="chat-box-header">
          Request Callback
          <span className="chat-box-toggle" onClick={() => setIsOpen(false)}>
            <i className="fa fa-times" />
          </span>
        </div>
        <div className="chat-box-body">
          <div className="feedback-form">
            <Input type="email" name="email" id="email" placeholder="Email" />
            <Input
              type="text"
              name="phone"
              id="phone"
              placeholder="Mobile No"
            />
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
    </div>
  );
};

export default ContactUs;
