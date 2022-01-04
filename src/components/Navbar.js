import React from "react";
import reactlogo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={reactlogo} width="40px" alt="" />
      <h3 className="nav-title">ReactFacts</h3>
      <h4 className="nav-description">React Course - Project 1</h4>
    </nav>
  );
}
