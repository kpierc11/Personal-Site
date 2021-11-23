import React, { ReactElement, useEffect, useState } from "react";
import "../header/Navbar.css";
import { BiMenu } from "react-icons/bi";

interface Props {}

function Navbar({}: Props): ReactElement {
  const windowHeight = window.outerHeight;

  const [toggleDropdown, setDropdownToggle] = useState(false);

  function handleClick() {
    !toggleDropdown ? setDropdownToggle(true) : setDropdownToggle(false);
  }

  if (windowHeight < 768) {
    let navbar = document.querySelector(".navbar");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="mobile-icon-container">
          <BiMenu className="mobile-icon" onClick={handleClick}></BiMenu>
        </div>
        <ul className="navbar">
          <li>Home </li>
          <li>About </li>
          <li>My Work</li>
        </ul>
        <div className={toggleDropdown ? "mobile-dropdown-active" :"mobile-dropdown"}>
          <ul className="mobile-dropdown-nav">
            <li>Home </li>
            <li>About </li>
            <li>My Work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
