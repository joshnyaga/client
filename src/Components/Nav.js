import React from "react";
import "./nav.css";
import logo from "../images/logo-la.png";

export default function Nav() {
  return (
    <header>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
      </div>
    </header>
  );
}
