import { useEffect, useRef } from "react";
import { startCanvasAnimation } from "./LandingPageAnimation";

export default function CanvasHome() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      startCanvasAnimation(canvasRef.current);
    }
  }, []);

  return (
    <div id="canvasHome">
      <canvas ref={canvasRef} />
    </div>
  );
}
