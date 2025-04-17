"use client";
import { useEffect, useState } from "react";

export default function AnimatedAudioSpectrum() {
  const [heights, setHeights] = useState([
    16, 10, 14, 12, 8, 20, 16, 10, 6, 14, 16, 12, 8, 20, 16, 10,
  ]);

  // Animate the bars to simulate audio activity
  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prevHeights) =>
        prevHeights.map(() => Math.floor(Math.random() * 16) + 4)
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-max flex items-center justify-center gap-1 h-10 max-w-md mb-4"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      {heights.map((height, index) => (
        <div
          key={index}
          className="w-2 rounded-full bg-gradient-to-b from-blue-300 to-blue-500 transition-all duration-200"
          style={{ height: `${height * 2}px` }}
        ></div>
      ))}
    </div>
  );
}
