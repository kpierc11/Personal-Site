import React, { ReactEventHandler, useState } from "react";
import {
  GiBookshelf,
  GiFamilyHouse,
  GiFamilyTree,
  GiFilmProjector,
  GiGameConsole,
  GiShop,
  GiSmartphone,
} from "react-icons/gi";
import {MdOutlineFamilyRestroom} from "react-icons/md";
import "../aboutSection/about.css";

function About() {
  const [hiddenText, showHiddenText] = useState(false);

  function handleMouseOver(e: React.MouseEvent) {
    const text = e.currentTarget.querySelector(".hide-text");
    text?.setAttribute("class", "show-text");
  }

  return (
    <div className="about-container">
      <h1 id="about-me" style={{ textAlign: "center" }}>
        About Me
      </h1>
      <div className="about-row">
        <div className="about-column">
          <div className="about-card" onMouseOver={(e) => handleMouseOver(e)}>
            <GiGameConsole className="about-card-icon"></GiGameConsole>
            <p className="hide-text">
              I have always loved video games since I was a kid. My favorite
              Game is definetly Legend of Zelda Link to the Past
            </p>
          </div>
        </div>
        <div className="about-column">
          <div className="about-card" onMouseOver={(e) => handleMouseOver(e)}>
            <GiFilmProjector className="about-card-icon"></GiFilmProjector>
            <p className="hide-text">
              The best set of movies I've ever seen has to be the Lord of the
              Rings Trilogy. I was lucky to watch the second and third in
              theaters with my dad.
            </p>
          </div>
        </div>
        <div className="about-column">
          <div className="about-card" onMouseOver={(e) => handleMouseOver(e)}>
            <GiBookshelf className="about-card-icon"></GiBookshelf>
            <p className="hide-text">
              I recieved my Associate Degree of Computer Programmer at Northeast
              State Community College Blountville, TN
            </p>
          </div>
        </div>
        <div className="about-column">
          <div className="about-card" onMouseOver={(e) => handleMouseOver(e)}>
            <GiSmartphone className="about-card-icon"></GiSmartphone>
            <p className="hide-text">
              I'm currently working to improve my skills in the mobile app
              development field. I'm learning swift for IOS and React Native for
              Hybrid Mobile Apps
            </p>
          </div>
        </div>
        <div className="about-column">
          <div className="about-card" onMouseOver={(e) => handleMouseOver(e)}>
            <GiShop className="about-card-icon"></GiShop>
            <p className="hide-text">
              I'm also a little bit of an entrepenuer. I've recently started my
              own software company which I hope to make, websites, mobile apps
              and video games in the near future.
            </p>
          </div>
        </div>
        <div className="about-column">
          <div className="about-card" onMouseOver={(e) => handleMouseOver(e)}>
            <MdOutlineFamilyRestroom className="about-card-icon"></MdOutlineFamilyRestroom>
            <p className="hide-text">
              I've got two brothers and two sisters, and four dogs. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
