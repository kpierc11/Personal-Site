import "../ui/card.css";

interface ICard {
  image?: string;
}

function Card({ image }: ICard) {
  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={"card-container"} style={background}>
      <div></div>
      <div className="overlay"></div>
    </div>
  );
}

export default Card;
