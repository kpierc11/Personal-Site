import { url } from "inspector";
import React from "react";
import "../portfolioSection/card.css";

interface ICard {
  image?: string;
}

function Card({ image }: ICard) {

  console.log(image);
  const background = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div className="card-container" style={background}></div>;
}

export default Card;
