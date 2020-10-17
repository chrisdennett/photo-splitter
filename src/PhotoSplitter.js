import React, { useState } from "react";
import { PointsEditor } from "./PointsEditor";
import { SplitCanvas } from "./SplitCanvas";
import { useImage } from "./useImage";

const defaultPoints = [
  { x: 0.1, y: 0.2 },
  { x: 0.5, y: 0 },
  { x: 0.9, y: 0.7 },
  { x: 0.3, y: 0.9 }
];

export const PhotoSplitter = () => {
  const [points, setPoints] = useState(defaultPoints);

  const img1 = useImage("doug.png");
  const img2 = useImage("floor.jpg");

  return (
    <div>
      <h2>PhotoSplitter</h2>
      <PointsEditor points={points} setPoints={setPoints} w={250} h={300} />
      <SplitCanvas img1={img1} img2={img2} points={points} w={250} h={300} />
    </div>
  );
};
