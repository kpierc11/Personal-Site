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
      buttonText: "See Project",
      buttonLink: "https://www.brightridge.com/",
    },
    {
      imageUrl: "/images/vaya-screenshot.png",
      title: "Vaya Health",
      text: "Vaya Health is a public managed care organization (MCO) in North Carolina, focusing on whole-person care for individuals with mental health challenges, substance use disorders, intellectual/developmental disabilities, and traumatic brain injuries.",
      icons: [FaWordpress],
      buttonText: "See Project",
      buttonLink: "https://www.vayahealth.com/",
    },
    {
      imageUrl: "/images/provider-screenshot.png",
      title: "Provider Central",
      text: "Vaya Providers is an integral part of Vaya Health, offering a portal for healthcare providers within Vaya’s network. It serves as a resource hub, enabling providers to access essential tools, documentation, and support to deliver quality care to individuals with behavioral health needs, intellectual/developmental disabilities, and traumatic brain injuries across North Carolina.​",
      icons: [FaWordpress],
      buttonText: "See Project",
      buttonLink: "https://providers.vayahealth.com/",
    },
    {
      imageUrl: "/images/learn-screenshot.png",
      title: "Vaya Learn",
      text: "Vaya Learn is Vaya Health’s e-learning platform designed to provide training and educational resources for healthcare providers. It offers courses and certifications aimed at enhancing the skills and knowledge of professionals delivering care to individuals with mental health and developmental challenges, promoting continuous improvement in service delivery across Vaya’s network.",
      icons: [FaWordpress],
      buttonText: "See Project",
      buttonLink: "https://learn.vayahealth.com/",
    },
    {
      imageUrl: "/images/heroes-codex.png",
      title: "Heroes Codex Web App",
      text: "Heroes Codex is a fan-driven resource hub for Heroes of the Storm, offering up-to-date hero guides, free rotation info, patch notes, and map strategies.",
      icons: [FaWordpress, FaReact, SiNextdotjs],
      buttonText: "See Project",
      buttonLink: "https://heroescodex.com/",
    },
    {
      imageUrl: "/images/dashboard-demo.png",
      title: "Hydro Bioscience Demo Dashboard",
      text: "This was contract work for a custom designed dashboard demo for a water metric system that was in progress but was later cut due development time.",
      icons: [FaWordpress, FaReact, SiNextdotjs, SiMaterialdesign],
      buttonText: "See Project",
      buttonLink: "https://dashboard210.netlify.app/",
    },
    {
      imageUrl: "/images/better-die-gaming-screenshot.png",
      title: "Better Die Gaming News Blog",
      text: "This is a game news blog site in the works being built in a custom block theme.",
      icons: [FaWordpress],
      buttonText: "Coming Soon",
      buttonLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="flex justify-center items-center flex-col w-[100%] mt-[10%]"
    >
      <h2 className="font-bold text-3xl md:text-5lg lg:text-5xl text-center mb-[20px]">
        Projects/Portfolio
      </h2>
      <div className="flex flex-row flex-wrap justify-center mt-5">
        {cards.map(
          ({ imageUrl, title, text, icons, buttonText, buttonLink }, index) => {
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
                      <a className="btn btn-primary" href={`${buttonLink}`} target="_blank">
                        {buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
