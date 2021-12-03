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
  SiFirebase,
  SiMysql,
  SiPrestashop,
} from "react-icons/si";
import {
  FaDesktop,
  FaMagento,
  FaOpencart,
  FaPhp,
  FaShopify,
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
            <DiHtml5 className="language-icon"></DiHtml5>
            <DiCss3 className="language-icon"></DiCss3>
            <p className="skill-text">Frameworks</p>
            <DiReact className="language-icon"></DiReact>
            <DiJqueryLogo className="language-icon"></DiJqueryLogo>
            <SiBootstrap className="language-icon"></SiBootstrap>
            <SiBulma className="language-icon"></SiBulma>
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
            <p className="skill-text">Databases</p>
            <SiMysql className="language-icon"></SiMysql>
            <DiMongodb className="language-icon"></DiMongodb>
            <SiFirebase className="language-icon"></SiFirebase>
            <p className="skill-text">Frameworks</p>
            <SiCodeigniter className="language-icon"></SiCodeigniter>
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
            <FaMagento className="language-icon"></FaMagento>
            <FaOpencart className="language-icon"> </FaOpencart>
            <SiPrestashop className="language-icon"></SiPrestashop>
            <FaShopify className="language-icon"></FaShopify>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
