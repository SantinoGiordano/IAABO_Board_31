"use client";

import { useEffect, useState } from "react";

export default function HeroText() {
  const phrases = ["One Rule", "One Interpretation"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`relative z-10 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center px-6 transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {phrases[index]}
    </h1>
  );
}
