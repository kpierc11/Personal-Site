import { url } from "inspector";
import React from "react";
import { IconType } from "react-icons/lib";
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
