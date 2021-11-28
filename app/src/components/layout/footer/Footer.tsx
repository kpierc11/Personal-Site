import React, { ReactElement, useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import "../footer/footer.css";

interface Props {}

function Footer({}: Props): ReactElement {
  const windowHeight = window.outerHeight;

  const [toggleDropdown, setDropdownToggle] = useState(false);

  function handleClick() {}

  if (windowHeight < 768) {
    let navbar = document.querySelector(".navbar");
  }

  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <p className="footer-header">423-552-5256</p>
          <p className="footer-header">kalebpierce@gmail.com</p>
          <div className="social-icons">
            <a>
              <FaFacebook className="social-icon"></FaFacebook>
            </a>
            <a>
              <FaGithub className="social-icon"></FaGithub>
            </a>
            <a>
              <FaLinkedin className="social-icon"></FaLinkedin>
            </a>
          </div>
          <p className="footer-sub-header">Copyright 2021 Made By Kaleb Pierce</p>
          <p className="footer-sub-header">Created with React <FaReact className="react-icon"/></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
