import "../headerSection/banner.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-row">
        <div className="banner-column">
          <img
            className="banner-image"
            src={"/images/kaleb_pic.jpg"}
            alt="banner"
          ></img>
        </div>
        <div className="banner-column">
          <p className="header">
            Web Designer & Software Developer Skilled in Front End Design,
            Backend Server & Database Management
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/kaleb.pierce.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon"></FaFacebook>
            </a>
            <a
              href="https://github.com/kpierc11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/kaleb-pierce-a829671b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon"></FaLinkedin>
            </a>
          </div>
          <button className="header-button">Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
