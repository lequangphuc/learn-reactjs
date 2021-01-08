import React, { useState, useEffect, useRef } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "yellow"];

  const currenIndex = COLOR_LIST.indexOf(currentColor); // random 0 --> 2
  let newIndex = currenIndex; // Default: set CurrentIndex === newIndex

  // Check: currentIndex === newIndex -> random another index
  while (currenIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  // Change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log(colorRef.current);

      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
