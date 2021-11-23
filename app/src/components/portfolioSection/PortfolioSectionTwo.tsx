import React, { useState } from "react";
import Card from "./Card";
import "../portfolioSection/portfolio.css";

function PortfolioSectionTwo() {
  return (
    <>
      <div>
        <h1 style={{textAlign:'center'}}>Wordpress Sites</h1>
        <div className="portfolio-row">
          <div className="portfolio-column">
            <Card image={"/images/tnp_site.PNG"}></Card>
          </div>
          <div className="portfolio-column">
            <Card image={"/images/eastside_site.PNG"}></Card>
          </div>
          <div className="portfolio-column">
            <Card image={"/images/winery_site.PNG"}></Card>
          </div>
          <div className="portfolio-column">
            <Card
              image={"https://kalebjp.com/assets/cabinet-saver-site.PNG"}
            ></Card>
          </div>
          <div className="portfolio-column">
            <Card image={"/images/tytan_site.PNG"}></Card>
          </div>
          <div className="portfolio-column">
            <Card image={"/images/winery_site.PNG"}></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSectionTwo;
