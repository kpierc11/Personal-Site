import { useEffect, useRef } from "react";
import Game from "./Game";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const game = new Game(canvas, context); 
    game.init();
  });

  return <canvas id="canvas" width="600" height="600" ref={canvasRef}></canvas>;
}
