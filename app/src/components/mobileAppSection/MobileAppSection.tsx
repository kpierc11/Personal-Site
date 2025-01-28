import { BiArrowBack, BiArrowToRight } from "react-icons/bi";
import "../mobileAppSection/mobileAppSection.css";
import { DiReact } from "react-icons/di";
import { GiArrowWings, GiSpineArrow } from "react-icons/gi";
import { SiFirebase, SiTypescript, SiWordpress } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

function MobileAppSection() {
  return (
    <div className="mobile-app-section-container">
      <h1 id="my-work" style={{ textAlign: "center" }}>
        Projects
      </h1>
      <div className="mobile-app-section-row">
        <div className="mobile-app-section-column">
          <div className="mobile-app-section-card">
            <img
              className="phone-image"
              src="/images/heroes-codex.png"
              alt="iphone"
            ></img>
            <div className="app-card-detail">
              <h3>Heroes Codex</h3>
              <p>
                The Heroes Codex app is designed to provide, build guides and
                game news for heroes of the storm. This has been a passion
                project that me and my brother have been working on for one of
                our all time favorite games.
              </p>
              <p>
                Built with:
                <div>
                  <SiWordpress className="app-language-icon"></SiWordpress>
                  <DiReact className="app-language-icon"></DiReact>
                </div>
              </p>
              <div className="app-button-container">
                <a
                  className="app-button"
                  href="https://heroescodex.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  See Application
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-app-section-column">
          <div className="mobile-app-section-card">
            <img
              className="phone-image"
              src="/images/heroes-codex.png"
              alt="iphone"
            ></img>
            <div className="app-card-detail">
              <h3>Networking Group Application</h3>
              <p>
                This is a social app/business directory for the Incredible Towns
                networking Group
              </p>
              <p>
                Built with:
                <div>
                  <SiTypescript className="app-language-icon"></SiTypescript>
                  <DiReact className="app-language-icon"></DiReact>
                  <SiFirebase className="app-language-icon"></SiFirebase>
                </div>
              </p>
              <div className="app-button-container">
                <a
                  className="app-button"
                  href="https://expo.dev/@kpierc11/incredible-towns-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  See Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
