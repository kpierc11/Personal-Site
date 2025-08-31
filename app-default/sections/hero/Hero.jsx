"use client";
import { FaDownload } from "react-icons/fa6";
import { useEffect } from "react";
import Game from "@/components/game/Game";

export default function Hero() {
  useEffect(() => {
    const game = new Game();
    game.init();
  }, []);

  return (
    <div className="mt-[30px] flex flex-row justify-center items-center flex-wrap-reverse backdrop-blur-md rounded-md bg relative ">
      <div className="banner-background">test div</div>
      <div className=" basis-[50%] grow p-1 m-2">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl">
          Full Stack Web Developer
        </h1>
        <p className="mt-10 text-lg lg:text-2xl text break-words">
          Skilled and creative Web Developer with 4+ years of experience
          building responsive, user-focused websites and applications.
          Proficient in PHP, HTML, CSS, JavaScript, Git, and the WordPress CMS,
          with a proven ability to deliver high-quality, performance-optimized
          solutions.
        </p>
        <a
          className="btn btn-primary mt-10 transform transition-all duration-300 ease-in-out hover:-translate-y-[10px]"
          href="/assets/kaleb_pierce_resume_web_4.pdf"
          download
          rel="noopener noreferrer"
        >
          Download Resume
          <FaDownload className="size-[1.2em] ml-1" />
        </a>
      </div>
      <div
        id="canvas-container"
        className="
    flex justify-center items-start p-2
    basis-full max-w-full
    sm:basis-[20%] sm:max-w-[350px] 
    md:basis-[60%] md:max-w-[700px] 
    lg:basis-[50%] lg:max-w-[800px]"
      ></div>
    </div>
  );
}
