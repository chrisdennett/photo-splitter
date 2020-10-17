import React from "react";
import { SplitCanvas } from "./SplitCanvas";
import { useImage } from "./useImage";

export const PhotoSplitter = () => {
  const img1 = useImage("doug.png");
  const img2 = useImage("floor.jpg");

  return (
    <div>
      <h2>PhotoSplitter</h2>
      <SplitCanvas img1={img1} img2={img2} />
    </div>
  );
};
