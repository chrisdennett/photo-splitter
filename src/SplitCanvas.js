import React, { useEffect } from "react";
import styled from "styled-components";

export const SplitCanvas = ({ img1, img2, points }) => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    if (!img1 || !img2) return;
    drawCanvas(canvasRef.current, img1, img2, 250, 300, points);
  }, [img1, img2, points]);

  return (
    <Container>
      <canvas ref={canvasRef} />
    </Container>
  );
};

const drawCanvas = (canvas, img1, img2, width, height, points) => {
  canvas.width = width ? width : img1.width;
  canvas.height = height ? height : img1.height;

  const ctx = canvas.getContext("2d");
  drawImageToCanvas(ctx, img1, canvas.width, canvas.height);
  drawClipPath(ctx, points, canvas.width, canvas.height);
  drawImageToCanvas(ctx, img2, canvas.width, canvas.height);
};

const Container = styled.div`
  position: relative;
`;

const drawClipPath = (ctx, points, w, h) => {
  const [pt1, pt2, pt3, pt4] = points;

  ctx.beginPath();
  ctx.moveTo(pt1.x * w, pt1.y * h);
  ctx.lineTo(pt2.x * w, pt2.y * h);
  ctx.lineTo(pt3.x * w, pt3.y * h);
  ctx.lineTo(pt4.x * w, pt4.y * h);
  ctx.closePath();
  ctx.clip();
};

const drawImageToCanvas = (ctx, img, w, h) => {
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
};
