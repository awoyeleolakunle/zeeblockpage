import React from "react";
import "../contactNotifyBtn/contactUsBtn.css";

interface contactUsBtnInterface {
  text: string;
}

const ContactUsBtn: React.FC<contactUsBtnInterface> = ({ text }) => {
  return <button className="contactUsbutton">{text}</button>;
};
export default ContactUsBtn;
