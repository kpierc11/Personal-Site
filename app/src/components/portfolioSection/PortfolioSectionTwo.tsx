import Card from "../ui/Card";
import "../portfolioSection/portfolio.css";

function PortfolioSectionTwo() {
  return (
    <div className="portfolio-container">
      <h1 id="my-work" style={{ textAlign: "center" }}>
        Websites
      </h1>
      <div className="portfolio-row">
        <div className="portfolio-column">
          <a
            href="https://tricitiesnetworkingprofessionals.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/tnp_site.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column">
          <a
            href="https://eastsidebaptist.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/eastside_site.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column">
          <a
            href="https://wordpress-566797-1866221.cloudwaysapps.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/winery_site.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column">
          <a
            href="https://thecabinetsaver.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              image={"/images/cabinet-saver.PNG"}
            ></Card>
          </a>
        </div>
        <div className="portfolio-column">
          <a
            href="https://wordpress-566797-2246562.cloudwaysapps.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/tytan_site.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column">
          <a
            href="https://emberwindstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/emberwind-studios.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column" style={{justifyContent:'flex-start'}}>
          <a
            href="https://thetruehealthyyou.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/healthy_site.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column" style={{justifyContent:'flex-start'}}>
          <a
            href="http://phpstack-566797-1951162.cloudwaysapps.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/Phone-store-demo.PNG"}></Card>
          </a>
        </div>
        <div className="portfolio-column" style={{justifyContent:'flex-start'}}>
          <a
            href="http://phpstack-566797-2030780.cloudwaysapps.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card image={"/images/clothing-store-demo.PNG"}></Card>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSectionTwo;
