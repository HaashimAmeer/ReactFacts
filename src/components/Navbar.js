import React from "react";
import reactlogo from "../react-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="react-img" src={reactlogo} width="40px" alt="" />
      <h3 className="site-name">ReactFacts</h3>
      <h4 className="description">React Course - Project 1</h4>
    </nav>
  );
}
