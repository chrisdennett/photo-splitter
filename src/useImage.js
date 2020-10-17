import { useState, useEffect } from "react";

export function useImage(url) {
  const [sourceImg, setSourceImg] = useState(null);

  useEffect(() => {
    if (!sourceImg) {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.onload = () => {
        setSourceImg(image);
      };
      image.src = url;
    }
  }, [sourceImg, url]);

  return sourceImg;
}
