"use client";
import { useEffect, useState } from "react";

interface CarouselProps {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}

export const Carousel = ({
  items = [],
  speed = "normal",
  reverse = false,
}: CarouselProps) => {
  const [duplicateditems, setDuplicatedItems] = useState<string[]>([]);

  const getDuration = () => {
    switch (speed) {
      case "slow":
        return "40s";
      case "fast":
        return "20s";
      case "normal":
      default:
        return "30s";
    }
  };

  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="sm:max-w-[1200px] max-w-[1440px] w-full flex py-6 mx-auto relative overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
      <div
        className={
          reverse
            ? "flex animate-infinite-scroll-reverse"
            : "flex animate-infinite-scroll"
        }
        style={{ animationDuration: getDuration() }}
      >
        {duplicateditems.map((sponsor, index) => (
          <div
            key={index}
            className="mx-8 flex min-w-[150px] items-center justify-center"
          >
            <span className="text-xl font-medium cursor-default text-gray-500 hover:text-gray-800 duration-300">
              {sponsor}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
