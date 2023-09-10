import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
const HeroSlider = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2 - 60,
    y: window.innerHeight / 3 - 60,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = {
    active: {
      x: cursorPosition.x - 60,
      y: cursorPosition.y - 60,
    },
    reset: {
      x: window.innerWidth / 2 - 60,
      y: window.innerHeight / 3 - 60,
    },
  };

  const cursorRef = useRef<HTMLDivElement>(null);

  const resetCursor = () => setCursorVariant("reset");
  const activateCursor = () => setCursorVariant("active");

  React.useEffect(() => {
    const cursorMove = (e: MouseEvent) => {
      cursorRef.current!.style.left = "0px";
      cursorRef.current!.style.top = "0px";
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", cursorMove);

    return () => {
      window.removeEventListener("mousemove", cursorMove);
    };
  }, []);

  return (
    <div className="h-[100vh] w-full block relative">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="./videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        onMouseEnter={activateCursor}
        onMouseLeave={resetCursor}
        className="bs-cursor-container z-20 absolute w-full h-[calc(100vh_-_126px)] left-0 top-[126px]">
        <motion.div
          ref={cursorRef}
          className="relative z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 uppercase  inline-flex flex-col items-center justify-center font-bold text-sm"
          variants={variants}
          animate={cursorVariant}>
          <span className=" bg-bs-white w-[120px] h-[120px] rounded-full flex justify-center items-center px-5 text-center">
            Watch Reel
          </span>
          <span className="block text-center mt-3 text-bs-white text-sm">
            Basic/Dept&reg;
            <br />
            2010-∞
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlider;
