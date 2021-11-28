import React from "react";
import "../mobileAppSection/mobileAppSection.css";
import Card from "../ui/Card";

function MobileAppSection() {
  return (
    <div className="mobile-app-section-container">
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="mobile-app-section-row">
        <div className="mobile-app-section-column"></div>
        <div className="mobile-app-section-column">
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
