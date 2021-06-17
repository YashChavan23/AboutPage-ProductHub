import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <div className="navbar">
      <img className="img" src={logo} href="logo" />
      <div>
        <ul>
          <li class="item">
            <a href="#home">Home</a>
          </li>
          <li class="item">
            <a href="#market">Signup</a>
          </li>
          <li class="item">
            <a href="#about"> Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
