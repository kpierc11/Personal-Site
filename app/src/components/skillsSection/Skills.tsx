import "../skillsSection/skills.css";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript1,
  DiMongodb,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiBootstrap,
  SiBulma,
  SiCodeigniter,
  SiCplusplus,
  SiFirebase,
  SiMacos,
  SiMysql,
  SiPhpstorm,
  SiPrestashop,
  SiVisualstudio,
  SiVisualstudiocode,
} from "react-icons/si";
import {
  FaDesktop,
  FaLess,
  FaMagento,
  FaMicrosoft,
  FaOpencart,
  FaPhp,
  FaSass,
  FaShopify,
  FaUbuntu,
  FaWordpress,
} from "react-icons/fa";
import { GiPencilRuler, GiServerRack } from "react-icons/gi";

function Skills() {
  return (
    <div className="skills-container">
      <h1 id="home" style={{ textAlign: "center" }}>
        Skills
      </h1>
      <div className="skills-row">
        <div className="skills-column">
          <div className="skill-card">
            <div className="skill-header">
              <GiPencilRuler className="skill-icon"></GiPencilRuler>
            </div>
            <h2>Front End</h2>
            <p className="skill-text">Languages</p>
            <DiJavascript1 className="language-icon"></DiJavascript1>
            <p className="skill-text">Frameworks</p>
            <DiReact className="language-icon"></DiReact>
            <p className="skill-text">CSS</p>
            <SiBootstrap className="language-icon"></SiBootstrap>
          </div>
        </div>
        <div className="skills-column">
          <div className="skill-card">
            <div className="skill-header">
              <GiServerRack className="skill-icon"></GiServerRack>
            </div>
            <h2>Backend</h2>
            <p className="skill-text">Languages</p>
            <FaPhp className="language-icon"></FaPhp>
            <SiCplusplus className="language-icon"></SiCplusplus>
            <p className="skill-text">Databases</p>
            <SiMysql className="language-icon"></SiMysql>
          </div>
        </div>
        <div className="skills-column">
          <div className="skill-card">
            <div className="skill-header">
              <FaDesktop className="skill-icon"></FaDesktop>
            </div>
            <h2>Software</h2>
            <p className="skill-text">CMS</p>
            <FaWordpress className="language-icon"></FaWordpress>
            <p className="skill-text">OS</p>
            <FaMicrosoft className="language-icon"></FaMicrosoft>
            <FaUbuntu className="language-icon"></FaUbuntu>
            <p className="skill-text">IDE</p>
            <SiVisualstudio className="language-icon"></SiVisualstudio>
            <SiVisualstudiocode className="language-icon"></SiVisualstudiocode>
            <SiPhpstorm className="language-icon"></SiPhpstorm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
