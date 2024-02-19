import React from "react";
import "../header/header.css";
import DisplayItems from "../displayNavItem/displayNavItems";
import Zeelogo from "../zeeLogo/zeeLogo";
import SignUpButton from "../../signUpButton/signUpbtn";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Zeelogo />
      <DisplayItems />
      <SignUpButton />
    </div>
  );
};

export default Header;
