import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
} from "react";
import { motion } from "framer-motion";

const Carousel = ({ children }: PropsWithChildren) => {
  // Custom Cursor
  const cursorRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {
    active: {
      x: cursorPosition.x - 60,
      y: cursorPosition.y - 60,
    },
    reset: {
      x: window.innerWidth - 240,
      y: 120,
    },
  };

  const resetCursor = () => setCursorVariant("reset");
  const activateCursor = () => setCursorVariant("active");

  function handleMouseMove(e: MouseEvent) {
    const carouselRect = carouselContainerRef.current?.getBoundingClientRect();
    if (carouselRect) {
      // To reset cursor position before setting axes
      cursorRef.current!.style.left = "0px";
      cursorRef.current!.style.top = "0px";
      setCursorPosition({
        x: e.clientX - carouselRect?.left,
        y: e.clientY - carouselRect?.top,
      });
    }
  }
  // Custom Scrollbar
  const carouselRef = useRef<HTMLUListElement>(null);
  const scrollbarContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const carouselWidth = carouselRef.current?.scrollWidth
      ? +carouselRef.current.scrollWidth
      : 0;
    const scrollbarWidth = (windowWidth / carouselWidth) * 100;

    scrollbarRef.current!.style.width = `${scrollbarWidth}%`;
  }, []);

  function handleScroll() {
    const scrollbarWidth = scrollbarRef.current?.offsetWidth;
    const scrollbarContainerWidth = scrollbarContainerRef.current?.offsetWidth;

    if (scrollbarWidth && scrollbarContainerWidth) {
      let carouselLeftPos = carouselRef.current?.scrollLeft;

      const scrollLeftTheshould = scrollbarContainerWidth - scrollbarWidth;

      if (carouselLeftPos && carouselLeftPos >= scrollLeftTheshould) {
        carouselLeftPos = scrollLeftTheshould;
      }
      scrollbarRef.current!.style.left = `${carouselLeftPos}px`;
    }
  }

  return (
    <div
      className="relative cursor-none"
      ref={carouselContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={activateCursor}
      onMouseLeave={resetCursor}>
      <ul
        ref={carouselRef}
        className="flex gap-24 overflow-x-auto bs-no-scrollbar"
        onScroll={handleScroll}>
        {children}
      </ul>
      <div
        ref={scrollbarContainerRef}
        className="bs-wrapper mt-28 relative w-full before:content-[''] before:bg-bs-dark before:w-full before:opacity-[0.25] left-0 before:block before:h-[2px]">
        <div
          ref={scrollbarRef}
          className="h-[2px] bg-bs-dark absolute top-0"></div>
      </div>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        ref={cursorRef}
        className="bg-bs-pink absolute pointer-events-none top-1/2 right-[120px] -translate-y-[110%] z-10 inline-flex items-center justify-center w-[120px] h-[120px] rounded-full">
        <span className="font-bold uppercase text-sm text-bs-dark">Drag</span>
      </motion.div>
    </div>
  );
};

export default Carousel;
