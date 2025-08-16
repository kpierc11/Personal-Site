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

export default function Skills() {
  return (
    <div id="skills" className="flex justify-center flex-col w-[100%] mt-[10%]">
      <h1 className="text-4xl font-bold mb-12 text-center">Skills</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        <div className="flex flex-col flex-wrap gap-10">
          <h2 className="text-xl">Programming Languages</h2>
          <div className="flex flex-row items-center gap-3">
            <FaPhp className="size-[3em]"></FaPhp>
            <progress
              className="progress progress-primary h-[15px] w-56"
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-3">
            <DiJavascript1 className="size-[3em]"></DiJavascript1>
            <progress
              className="progress progress-primary h-[15px] w-56"
              value={70}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SiCplusplus className="size-[3em]"></SiCplusplus>
            <progress
              className="progress progress-primary h-[15px] w-56"
              value={50}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-3">
            <FaNode className="size-[3em]"></FaNode>
            <progress
              className="progress progress-primary h-[15px] w-56"
              value={50}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SiLua className="size-[3em]"></SiLua>
            <progress
              className="progress progress-primary h-[15px] w-56"
              value={50}
              max="100"
            ></progress>
          </div>
        </div>

        {/** Content Management Systems */}
        <div className="flex flex-col flex-wrap gap-10">
          <h2 className="text-xl">Content Managment Systems</h2>
          <div className="flex flex-row items-center gap-3">
            <FaWordpress className="size-[3em]"></FaWordpress>
            <progress
              className="progress progress-secondary h-[15px] w-56"
              value={90}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-3">
            <FaMagento className="size-[3em]"></FaMagento>
            <progress
              className="progress progress-secondary h-[15px] w-56"
              value={40}
              max="100"
            ></progress>
          </div>
          <div className="flex flex-row items-center gap-3">
            <FaShopify className="size-[3em]"></FaShopify>
            <progress
              className="progress progress-secondary h-[15px] w-56"
              value={30}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
