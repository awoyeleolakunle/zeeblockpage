import React from "react";
import "../homePage/homePage.css";
import Welcome from "../../components/homepage/welcome";
import AboutUs from "../../components/aboutUs/aboutUs";
import ContactUs from "../../components/contactUs/contactUs";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Welcome />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
