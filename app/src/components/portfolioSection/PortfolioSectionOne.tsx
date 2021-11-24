import React, { useState } from "react";
import Card from "../ui/Card";
import "../portfolioSection/portfolio.css";

function PortfolioSectionOne() {
  return (
    <>
      <div>
        <h1 style={{textAlign:'center'}}>My Work</h1>
        <div className="portfolio-row">
          <div className="portfolio-column">
            <Card image={"/images/TNP_site.PNG"}></Card>
          </div>
          <div className="portfolio-column">
            <Card></Card>
          </div>
          <div className="portfolio-column">
            <Card></Card>
          </div>
          <div className="portfolio-column">
            <Card></Card>
          </div>
          <div className="portfolio-column">
            <Card></Card>
          </div>
          <div className="portfolio-column">
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSectionOne;
