import { useEffect, useState } from "react";
import { Image } from "./styles";

function ImageBox({ x, y, percent }) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    setPosition([
      Math.random() * 400 - x * 100 - 50,
      Math.random() * 600 - y * 100 - 50,
    ]);
  }, [x, y]);

  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  );
}

export default ImageBox;
