import React from "react";
import "../homepage/welcome.css";
import Header from "../navHeader/header/header";
import Coming from "../coming/coming";

const Welcome: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="background-image"></div>
      <div className="overlay-color"></div>
      <div className="overlay-content">
        <Header />
        <Coming />
      </div>
    </div>
  );
};

export default Welcome;
