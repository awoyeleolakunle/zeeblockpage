import React from "react";

import "../aboutUs/aboutUs.css";
import { contentTexts } from "./contextText";
import { secondContextTexts } from "./contextText";

const AboutUs: React.FC = () => {
  return (
    <div className="about">
      <div className="aboutUsContainer">
        <h2>About Us</h2>
      </div>
      <div>
        <br />
        <br />

        {contentTexts.map((text, index) => (
          <p className="text" key={index}>
            {text}
          </p>
        ))}
      </div>
      <div>
        <br />
        {secondContextTexts.map((text, index) => (
          <p className="text" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
