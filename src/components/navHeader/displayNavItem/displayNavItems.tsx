import React from "react";
import "../displayNavItem/displayNavItem.css";
import NavItem from "../navItem/navItem";
import { navItemContents } from "../navItem/navItemContent";
import { useNavigate } from "react-router-dom";

const DisplayItems: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="displayNavItemList">
        {navItemContents.map((item, index) => (
          <NavItem key={index} text={item} onClick={() => navigate("/")} />
        ))}
      </ul>
    </div>
  );
};

export default DisplayItems;
