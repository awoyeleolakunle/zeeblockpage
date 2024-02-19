import React from "react";
import "../coming/coming.css";
import { contactNotifyText } from "./contactNotifyBtn/contactNotifyText";
import ContactUsBtn from "./contactNotifyBtn/contactUsBtn";

const Coming: React.FC = () => {
  return (
    <div className="comingDiv">
      <h1 className="comingContent">WE ARE COMING SOON!</h1>
      <ul className="contactAndNotifyMe">
        {contactNotifyText.map((item, index) => (
          <ContactUsBtn key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default Coming;
