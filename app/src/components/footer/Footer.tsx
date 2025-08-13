import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import "./footer.css";

function Footer() {

  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <p className="footer-header">423-552-5256</p>
          <p className="footer-header">kalebpierce@gmail.com</p>
          <div className="footer-social-icons">
          <a
              href="https://www.facebook.com/kaleb.pierce.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="footer-social-icon"></FaFacebook>
            </a>
            <a
              href="https://github.com/kpierc11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-social-icon"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/kaleb-pierce-a829671b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-social-icon"></FaLinkedin>
            </a>
          </div>
          <p className="footer-sub-header">
            &copy; Copyright {new Date().getFullYear()} Made By Kaleb Pierce
          </p>
          <p className="footer-sub-header">
            Created with React <FaReact className="react-icon" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
