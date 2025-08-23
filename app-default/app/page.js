import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import FadeInAnimation from "@/components/animation/FadeInAnimation";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center w-[100%]">
        <div className="max-w-[1600px] ml-3 mr-3">
          <FadeInAnimation>
            <Hero></Hero>
          </FadeInAnimation>
          <FadeInAnimation>
            <Projects></Projects>
          </FadeInAnimation>
          <FadeInAnimation>
            <Skills></Skills>
          </FadeInAnimation>
          <FadeInAnimation>
            <About></About>
          </FadeInAnimation>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
