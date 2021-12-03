import FadeInAnimation from "./scripts/animation/FadeInAnimation";
import Banner from "./components/headerSection/Banner";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/header/Navbar";
import PortfolioSectionTwo from "./components/portfolioSection/PortfolioSectionTwo";
import Skills from "./components/skillsSection/Skills";
import MobileAppSection from "./components/mobileAppSection/MobileAppSection";
import About from "./components/aboutSection/About";

function App() {
  return (
    <>
      <Navbar />
      <Banner></Banner>
      <FadeInAnimation>
        <About></About>
      </FadeInAnimation>
      <FadeInAnimation>
        <Skills></Skills>
      </FadeInAnimation>
      <FadeInAnimation>
        <PortfolioSectionTwo></PortfolioSectionTwo>
      </FadeInAnimation>
      <FadeInAnimation>
        <MobileAppSection></MobileAppSection>
      </FadeInAnimation>
      <Footer />
    </>
  );
}

export default App;
