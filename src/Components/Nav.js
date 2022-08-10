import React from "react";
import "./nav.css";
import logo from "../images/logo-la.png";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
