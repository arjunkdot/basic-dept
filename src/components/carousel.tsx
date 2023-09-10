import React, { PropsWithChildren, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Carousel = ({ children }: PropsWithChildren) => {
  const [isDown, setIsDown] = useState(false); // Scroll on drag: To check whether the mouse is down.
  const [startX, setStartX] = useState(0);  // Scroll on drag: Starting position once the the mouse is clicked on the slider.
  const [scrollLeft, setscrollLeft] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLUListElement>(null);
  const scrollbarContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll on drag
   * @link Adapted from Wes Bos' solution here: https://www.youtube.com/watch?v=C9EWifQ5xqA&ab_channel=WesBos
   */
  function scrollMouseDownHandler(e: MouseEvent) {
    setIsDown(true);
    setStartX(e.pageX - carouselRef.current?.offsetLeft!);
    setscrollLeft(carouselRef.current?.scrollLeft!);
  }
  function scrollMouseLeaveHandler() {
    setIsDown(false);
  }
  function scrollMouseUpHandler() {
    setIsDown(false);
  }
  function scrollMouseMoveHandler(e: MouseEvent) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current?.offsetLeft!;
    const walk = (x - startX) * 1.5;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  }
  // Custom Cursor

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
        className="flex gap-24 overflow-x-auto bs-no-scrollbar ease-linear duration-150"
        onMouseDown={scrollMouseDownHandler}
        onMouseUp={scrollMouseUpHandler}
        onMouseLeave={scrollMouseLeaveHandler}
        onMouseMove={scrollMouseMoveHandler}
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
        className={`bg-bs-pink absolute pointer-events-none top-1/2 right-[120px] -translate-y-[110%] z-10 inline-flex items-center justify-center 
        before:content-[''] before:width-0 before:height-0 before:inline-block before:absolute before:-left-[28px] before:border-b-[8px] before:border-b-bs-transparent before:border-t-[8px] before:border-t-bs-transparent before:ease-linear before:duration-150 before:border-r-[9px] before:border-r-bs-pink 
        after:content-[''] after:width-0 after:height-0 after:inline-block after:absolute after:-right-[28px] after:border-b-[8px] after:border-b-bs-transparent  after:border-t-[8px] after:border-t-bs-transparent after:border-t-transparent after:ease-linear after:duration-150 after:border-l-[9px] after:border-l-bs-pink 
        ease-linear duration-150 ${isDown ? 'w-[80px] h-[80px]' : 'w-[120px] h-[120px]'} ${isDown ? '' : 'before:border-opacity-0 before:ease-linear before:duration-150  before:-left-[30px] after:border-opacity-0 after:ease-linear after:duration-150  after:-right-[30px]'} rounded-full`}>
        <span className={`font-bold uppercase text-sm text-bs-dark ease-linear duration-150 ${isDown ? 'invisible' : 'block'}`}>Drag</span>
      </motion.div>
    </div>
  );
};

export default Carousel;