import "../mobileAppSection/mobileAppSection.css";
import { DiReact } from "react-icons/di";
import { SiLua, SiMaterialdesign, SiTypescript, SiWordpress } from "react-icons/si";

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
              src="/images/dashboard-demo.png"
              alt="iphone"
            ></img>
            <div className="app-card-detail">
              <h3>Dashboard Demo</h3>
              <p>
                This demo dashboard made with material ui design. 
              </p>
              <p>
                Built with:
                <div>
                  <SiTypescript className="app-language-icon"></SiTypescript>
                  <DiReact className="app-language-icon"></DiReact>
                  <SiMaterialdesign className="app-language-icon"></SiMaterialdesign>
                </div>
              </p>
              <div className="app-button-container">
                <a
                  className="app-button"
                  href="https://dashboard210.netlify.app/"
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
              src="/images/mount-music-addon.png"
              alt="iphone"
            ></img>
            <div className="app-card-detail">
              <h3>Mount Music Addon</h3>
              <p>
                This addon allows you to play music when riding a mount in world of warcraft.  
              </p>
              <p>
                Built with:
                <div>
                  <SiLua className="app-language-icon"></SiLua>
                </div>
              </p>
              <div className="app-button-container">
                <a
                  className="app-button"
                  href="https://dashboard210.netlify.app/"
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
