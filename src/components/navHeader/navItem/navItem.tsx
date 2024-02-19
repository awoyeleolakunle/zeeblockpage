import React from "react";
import "../navItem/navItem.css";

interface NavItemInterface {
  text: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemInterface> = ({ text, onClick }) => {
  return (
    <li className="item" onClick={onClick}>
      {text}
    </li>
  );
};

export default NavItem;
