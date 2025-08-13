import FadeInAnimation from "./scripts/animation/FadeInAnimation";
import Banner from "./components/bannerSection/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Skills from "./components/skillsSection/Skills";
import MobileAppSection from "./components/mobileAppSection/MobileAppSection";
import About from "./components/aboutSection/About";
import PortfolioSectionTwo from "./components/portfolioSection/PortfolioSectionTwo";

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
        <MobileAppSection></MobileAppSection>
      </FadeInAnimation>
      <Footer />
    </>
  );
}

export default App;
