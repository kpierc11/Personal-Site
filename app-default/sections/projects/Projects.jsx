"use client";
import { DiReact, DiJavascript1 } from "react-icons/di";
import {
  SiBootstrap,
  SiCplusplus,
  SiMysql,
  SiPhpstorm,
  SiLua,
} from "react-icons/si";
import {
  FaDesktop,
  FaMicrosoft,
  FaPhp,
  FaUbuntu,
  FaWordpress,
  FaNode,
  FaShopify,
  FaMagento,
} from "react-icons/fa";

export default function Projects() {
  const cards = [
    {
      image: "GiGameConsole",
      title: "Heroes Codex Web App",
      text: "Heroes Codex is a fan-driven resource hub for Heroes of the Storm, offering up-to-date hero guides, free rotation info, patch notes, and map strategies.",
      techStack:{}
    },
    {
      image: "GiFilmProjector",
      title: "Hydro Bioscience Demo Dashboard",
      text: "This was contract work for a custom designed dashboard demo for a water metric system that was in progress but was later cut due development time.",
    },
    {
      image: "GiGameConsole",
      title: "Heroes Codex Web App",
      text: "Heroes Codex is a fan-driven resource hub for Heroes of the Storm, offering up-to-date hero guides, free rotation info, patch notes, and map strategies.",
    },
    {
      image: "GiFilmProjector",
      title: "Hydro Bioscience Demo Dashboard",
      text: "This was contract work for a custom designed dashboard demo for a water metric system that was in progress but was later cut due development time.",
    },
    {
      image: "GiGameConsole",
      title: "Heroes Codex Web App",
      text: "Heroes Codex is a fan-driven resource hub for Heroes of the Storm, offering up-to-date hero guides, free rotation info, patch notes, and map strategies.",
    },
    {
      image: "GiFilmProjector",
      title: "Hydro Bioscience Demo Dashboard",
      text: "This was contract work for a custom designed dashboard demo for a water metric system that was in progress but was later cut due development time.",
    },
  ];

  return (
    <div id="skills" className="flex justify-center flex-col w-[100%] mt-[10%]">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {cards.map(({ image, title, text },index) => {
          return (
            <div key={index} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">See Project</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
