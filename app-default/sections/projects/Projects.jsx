"use client";
import { FaWordpress } from "react-icons/fa";
import { SiMaterialdesign, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

export default function Projects() {
  const cards = [
    {
      imageUrl: "/images/brightridge-electric-screenshot.png",
      title: "BrightRidge Electric",
      text: "BrightRidge is a not-for-profit public electric utility serving over 83,000 customers in Washington, Sullivan, Carter, and Greene counties in northeast Tennessee. Established in 1945 as the Johnson City Power Board, it rebranded to BrightRidge in 2017 to better reflect its expanded service area and innovative offerings.",
      icons: [FaWordpress],
      buttonLink: "#",
    },
    {
      imageUrl: "/images/vaya-screenshot.png",
      title: "Vaya Health",
      text: "Vaya Health is a public managed care organization (MCO) in North Carolina, focusing on whole-person care for individuals with mental health challenges, substance use disorders, intellectual/developmental disabilities, and traumatic brain injuries.",
      icons: [FaWordpress],
      buttonLink: "#",
    },
    {
      imageUrl: "/images/provider-screenshot.png",
      title: "Provider Central",
      text: "Vaya Providers is an integral part of Vaya Health, offering a portal for healthcare providers within Vaya’s network. It serves as a resource hub, enabling providers to access essential tools, documentation, and support to deliver quality care to individuals with behavioral health needs, intellectual/developmental disabilities, and traumatic brain injuries across North Carolina.​",
      icons: [FaWordpress],
      buttonLink: "#",
    },
    {
      imageUrl: "/images/learn-screenshot.png",
      title: "Vaya Learn",
      text: "Vaya Learn is Vaya Health’s e-learning platform designed to provide training and educational resources for healthcare providers. It offers courses and certifications aimed at enhancing the skills and knowledge of professionals delivering care to individuals with mental health and developmental challenges, promoting continuous improvement in service delivery across Vaya’s network.",
      icons: [FaWordpress],
      buttonLink: "#",
    },
    {
      imageUrl: "/images/heroes-codex.png",
      title: "Heroes Codex Web App",
      text: "Heroes Codex is a fan-driven resource hub for Heroes of the Storm, offering up-to-date hero guides, free rotation info, patch notes, and map strategies.",
      icons: [FaWordpress, FaReact, SiNextdotjs],
      buttonLink: "#",
    },
    {
      imageUrl: "/images/dashboard-demo.png",
      title: "Hydro Bioscience Demo Dashboard",
      text: "This was contract work for a custom designed dashboard demo for a water metric system that was in progress but was later cut due development time.",
      icons: [FaWordpress, FaReact, SiNextdotjs, SiMaterialdesign],
      buttonLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="flex justify-center items-center flex-col w-[100%] mt-[10%]"
    >
      <h1 className="text-2lg md:text-5lg lg:text-5xl font-bold mb-12 text-center">
        Projects/Portfolio
      </h1>
      <div className="flex flex-row flex-wrap justify-center mt-5">
        {cards.map(({ imageUrl, title, text, icons }, index) => {
          return (
            <div key={index} className="p-4 basis-lg">
              <div className="card card-dash border-primary bg-base-100 shadow-lg h-[100%]">
                <img
                  className="rounded-t-[1rem]"
                  src={`${imageUrl}`}
                  alt={`${title}`}
                  width="100%"
                  height="500px"
                />

                <div className="card-body">
                  <div className="flex flex-row items-center gap-3">
                    <div>
                      <p className="font-bold">Built with: </p>
                    </div>
                    {icons.map((Icon, index) => {
                      return <Icon key={index} className="size-[2em]" />;
                    })}
                  </div>
                  <h2 className="card-title">{title}</h2>
                  <p>{text}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Project</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
