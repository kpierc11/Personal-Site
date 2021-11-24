import React from "react";
import Card from "../ui/Card";
import "../headerSection/banner.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-row">
        <div className="banner-column">
          <Card image={"/images/kaleb_pic.jpg"}></Card>
        </div>
        <div className="banner-column">
          <h2 className="header">
            Web Designer & Software Developer Skilled in Front End Design,
            Backend Server & Database Management
          </h2>
          <div className="social-icons">
              <a><FaFacebook className="social-icon"></FaFacebook></a>
              <a><FaGithub className="social-icon"></FaGithub></a>
              <a><FaLinkedin className="social-icon"></FaLinkedin></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
