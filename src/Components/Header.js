import React from "react";
import "../Styles/Header.css";

const Header = (props) => (
  <nav className="header">
    <h1>
      {props.title}
      <span className="subtitle">{props.subtitle}</span>
    </h1>
  </nav>
);

export default Header;
