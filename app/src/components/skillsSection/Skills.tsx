import React from "react";
import Card from "../ui/Card";
import "../skillsSection/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <div className="skills-row">
        <div className="skills-column">
          <Card></Card>
        </div>
        <div className="skills-column">
          <Card></Card>
        </div>
        <div className="skills-column">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default Skills;
