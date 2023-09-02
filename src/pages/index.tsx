import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { motion } from "framer-motion";

const IndexPage: React.FC<PageProps> = () => {
  const [cursorPosition, setCursorPosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = React.useState("default");
  const variants = {
    active: {
      x: cursorPosition.x - 57.5,
      y: cursorPosition.y - 57.5,
    },
    reset: {
      x: (window.innerWidth / 2) - 57.5,
      y: (window.innerHeight / 3) - 57.5,
    },
  };
  React.useEffect(() => {
    const cursorMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", cursorMove);

    return () => {
      window.removeEventListener("mousemove", cursorMove);
    };
  }, []);

  const resetCursor = () => setCursorVariant("reset");
  const activateCursor = () => setCursorVariant("active");
  return (
    <main>
      <div className="bg-bs-pink h-[100vh] w-full block relative">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="./videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div
          onMouseEnter={activateCursor}
          onMouseLeave={resetCursor}
          className="bs-cursor-container z-20 absolute w-full h-[calc(100vh_-_126px)] left-0 top-[126px]">
          <motion.div
            className="absolute z-10 top-0 left-0 uppercase font-bold text-sm"
            variants={variants}
            animate={cursorVariant}>
            <span className=" bg-bs-white w-[115px] h-[115px] rounded-full flex justify-center items-center px-5 text-center">
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
      <h1 className="text-bs-dark">Look ma, no hands!</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
