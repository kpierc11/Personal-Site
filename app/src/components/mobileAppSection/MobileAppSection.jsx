import React from "react";
import "../mobileAppSection/mobileAppSection.css";
import Card from "../ui/Card";

function MobileAppSection() {
  return (
    <div className="mobile-app-section-container">
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="mobile-app-section-row">
        <div className="mobile-app-section-column">
          <div className="mobile-app-section-card">
            <img className="phone-image" src="/images/iphone-image.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
