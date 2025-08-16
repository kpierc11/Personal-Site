"use client";
import { FaDownload } from "react-icons/fa6";

export default function Hero() {
  function handleMouseMove(e) {
    let bannerBackground = document.querySelector(".banner-background");
    console.log(bannerBackground);
  }

  return (
    <div
      className="mt-[100px] flex flex-wrap backdrop-blur-md rounded-md bg relative max-w-[700px]"
      onMouseOver={handleMouseMove}
    >
      <div className="banner-background">test div</div>
      <div className="">
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
          className="btn btn-secondary mt-10 transform transition-all duration-300 ease-in-out 
               transform hover:-translate-x-[-10px] "
          href="assets/kaleb_pierce_resume _web_3.pdf"
          download
          rel="noopener noreferrer"
          target="_blank"
        >
          Download Resume
          <FaDownload className="size-[1.2em] ml-1" />
        </a>
      </div>
      <div className=""></div>
    </div>
  );
}
