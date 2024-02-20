import React from "react";
import "../footer/footer.css";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="mainDiv">
        <div className="firstRow">
          <li>Contact Information</li>
          <li>
            <img src="" alt="" />
            8502 Preston Rd. Inglewood, Maine 98380
          </li>
          <li>
            <img src="" alt="" />
            zeeblockstravels@email.com
          </li>
          <li>
            <img src="" alt="" />
            8502 Preston Rd. Inglewood, Maine 98380
          </li>
        </div>

        <div className="firstRow">
          <li>Navigation Link</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Study Abroad</li>
          <li>ELTS Training</li>
          <li>Visa Processing</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </div>

        <div className="firstRow">
          <li>Newsletter Subscription</li>
          <li className="emailAddress">Email Address</li>
          <button className="subscribeBtn">Subscribe</button>

          <div className="socials">
            <li>Social Media Links</li>
            <div className="classIcons">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">copyright©2023zeeblockstravels</div>
    </div>
  );
};

export default Footer;
