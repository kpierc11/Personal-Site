import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { GiAncientSword } from "react-icons/gi";

function Navbar() {
  const [toggleDropdown, setDropdownToggle] = useState(false);

  function handleClick() {
    !toggleDropdown ? setDropdownToggle(true) : setDropdownToggle(false);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="mobile-icon-container">
          <BiMenu className="mobile-icon" onClick={handleClick}></BiMenu>
        </div>
        <ul className="navbar">
          <li>
            <a style={{ textDecoration: "none", color: "black" }} href="#home">
              Skills
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#about-me"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#my-work"
            >
              My Work
            </a>
          </li>
        </ul>
        <p className="logo">
          <GiAncientSword className="sword-icon"></GiAncientSword>KJP
        </p>
      </div>
      <div
        className={
          toggleDropdown ? "mobile-dropdown-active" : "mobile-dropdown"
        }
      >
        <ul className="mobile-dropdown-nav">
          <li>
            <a style={{ textDecoration: "none", color: "black" }} href="#home">
              Skills
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#about-me"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#my-work"
            >
              My Work
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
