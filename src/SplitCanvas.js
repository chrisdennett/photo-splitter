import React, { useEffect } from "react";

export const SplitCanvas = ({ img1, img2 }) => {
  const canvasRef1 = React.useRef(null);
  const canvasRef2 = React.useRef(null);

  useEffect(() => {
    if (!img1 || !img2) return;
    drawCanvas(canvasRef1.current, img1, 250, 300);
    drawCanvas(canvasRef2.current, img2, 250, 300);
  }, [img1, img2]);

  return (
    <div>
      <canvas ref={canvasRef1} />
      <canvas ref={canvasRef2} />
    </div>
  );
};

const drawCanvas = (canvas, source, width, height) => {
  canvas.width = width ? width : source.width;
  canvas.height = height ? height : source.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(
    source,
    0,
    0,
    source.width,
    source.height,
    0,
    0,
    canvas.width,
    canvas.height
  );
};
