import "../mobileAppSection/mobileAppSection.css";
import { DiReact } from "react-icons/di";
import { SiFirebase, SiTypescript } from "react-icons/si";

function MobileAppSection() {
  return (
    <div className="mobile-app-section-container">
      <h1 id="my-work" style={{ textAlign: "center" }}>
        Mobile Apps
      </h1>
      <div className="mobile-app-section-row">
        <div className="mobile-app-section-column">
          <div className="mobile-app-section-card">
            <img
              className="phone-image"
              src="/images/to-do-app-pic.png"
              alt="iphone"
            ></img>
            <div className="mobile-overlay">
              <h1 style={{ color: "white" }}>Simple To Do App</h1>
              <p style={{ color: "white", padding: 20 }}>
                This is a very simple to do app that has basic list
                functionality.
              </p>
              <p style={{ color: "white", padding: 20 }}>
                Built with:
                <div>
                  <SiTypescript className="app-language-icon"></SiTypescript>
                  <DiReact className="app-language-icon"></DiReact>
                </div>
              </p>
              <div className="app-button-container">
                <a
                  className="app-button"
                  href="https://expo.dev/@kpierc11/todo-application"
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
              src="/images/incredible-towns-phone-pic.png"
              alt="iphone"
            ></img>
            <div className="mobile-overlay">
              <h1 style={{ color: "white" }}>Networking Group Application</h1>
              <p style={{ color: "white", padding: 20 }}>
                This is a social app/business directory for the Incredible Towns
                networking Group
              </p>
              <p style={{ color: "white", padding: 20 }}>
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
