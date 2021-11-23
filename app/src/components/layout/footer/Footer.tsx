import React, { ReactElement, useEffect, useState } from "react";
import "../footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {}

function Footer({}: Props): ReactElement {
  const windowHeight = window.outerHeight;

  const [toggleDropdown, setDropdownToggle] = useState(false);

  function handleClick() {}

  if (windowHeight < 768) {
    let navbar = document.querySelector(".navbar");
  }

  return (
    <div style={{paddingTop:'10%'}}>
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-list">
            <li>Home </li>
            <li>About </li>
            <li>My Work</li>
          </ul>
        </div>

        <div className="footer-col">
          <h1 className="footer-header">Other Sites</h1>
          <ul className="footer-list">
            <li>Home </li>
            <li>About </li>
            <li>My Work</li>
          </ul>
        </div>
        <div className="footer-col">
          <h1 className="footer-header">Social Media</h1>
          <ul className="footer-list">
            <li>Home </li>
            <li>About </li>
            <li>My Work</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
