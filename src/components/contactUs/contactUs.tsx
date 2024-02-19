import React from "react";

import "../contactUs/contactUs.css";
import SubmitButton from "../submitButton/sunmitBtn";

const ContactUs: React.FC = () => {
  return (
    <div className="contactBackground">
      <div className="contactUsContainer">
        <h2>Contact Us</h2>
      </div>
      <br />
      <br />
      <div className="firstBox"> </div>
      <div className="secondBox"></div>
      <SubmitButton />
    </div>
  );
};

export default ContactUs;
