import FadeInAnimation from "./components/animation/FadeInAnimation";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/header/Navbar";
import PortfolioSectionOne from "./components/portfolioSection/PortfolioSectionOne";
import PortfolioSectionTwo from "./components/portfolioSection/PortfolioSectionTwo";

function App() {
  return (
    <>
      <Navbar />
      <FadeInAnimation>
        <PortfolioSectionOne></PortfolioSectionOne>
      </FadeInAnimation>
      <FadeInAnimation>
        <PortfolioSectionTwo></PortfolioSectionTwo>
      </FadeInAnimation>
      <Footer />
    </>
  );
}

export default App;
