import {
  GiStairsGoal,
  GiFilmProjector,
  GiGameConsole,
  GiDiploma,
  GiBackpack,
  GiFamilyHouse,
} from "react-icons/gi";

export default function About() {
  const cards = [
    {
      icon: GiGameConsole,
      title: "Favorite Video Game",
      text: "I’ve always loved video games since I was a kid. My favorite game is definitely Legend of Zelda: Link to the Past.",
    },
    {
      icon: GiFilmProjector,
      title: "Favorite Movie",
      text: "The best set of movies I’ve ever seen has to be the Lord of the Rings Trilogy. I was lucky to watch the second and third in theaters with my dad.",
    },
    {
      icon: GiDiploma,
      title: "Education",
      text: "I received my Associate Degree of Computer Programming at Northeast State Community College, Blountville, TN. Currently pursuing a Bachelor of Computer Science at WGU.",
    },
    {
      icon: GiBackpack,
      title: "Travel Plans",
      text: "My top place right now is New Zealand and then Paris.",
    },
    {
      icon: GiStairsGoal,
      title: "Future Goals",
      text: "Eventually have a few video games developed under my belt, and learn how to play the piano.",
    },
    {
      icon: GiFamilyHouse,
      title: "Family",
      text: "I’ve got 2 brothers and 2 sisters and too many cousins to remember.",
    },
  ];

  return (
    <div id="about" className="mt-[15%]">
      <h2 className="text-3xl font-bold text-center">About Me</h2>

      <div className="grid gap-6 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, text }, idx) => (
          <div
            key={idx}
            className="card cursor-pointer shadow-lg hover:-translate-y-2 transition-transform duration-300 min-h-[300px] w-full mx-auto"
          >
            <div className="card-body">
              <div className="">
                <Icon className="size-[8em]" />
              </div>
              <h2 className="card-title">{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
