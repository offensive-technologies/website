import { NavLink, useLocation } from "react-router-dom";
import "./css/menu.css";
import React from "react";

export default function Menu() {
  const location = useLocation();

  const getPageName = (path) => {
    switch (path) {
      case "/library":
        return "Library";
      case "/tools":
        return "Tools";
      case "/about":
        return "About";
      case "/":
        return "About";
      default:
        return "404"; // Home
    }
  };

  const currentPage = getPageName(location.pathname);

  return (
    <div className="menu-flexbox">
      <div className="left-part-menu">
        <p id="brand-title">OFFTECH</p>
        <p id="placeholder">{currentPage}</p>
      </div>
      <div className="right-part-menu">
        <NavLink to="/library" state={{ fromMenu: true }} id="nav">
          LIBRARY
        </NavLink>
        <NavLink to="/tools" state={{ fromMenu: true }} id="nav">
          TOOLS
        </NavLink>
        <NavLink to="/about" state={{ fromMenu: true }} id="nav">
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}
