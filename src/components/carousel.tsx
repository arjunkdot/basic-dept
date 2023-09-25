import React, { PropsWithChildren, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Carousel = (props: PropsWithChildren) => {
  const [isDown, setIsDown] = useState(false); // Scroll on drag: To check whether the mouse is down.
  const [startX, setStartX] = useState(0); // Scroll on drag: Starting position once the the mouse is clicked on the slider.
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
      x: window.innerWidth - 150,
      y: 210,
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
        className="flex overflow-x-auto ease-linear duration-150 bs-no-scrollbar"
        onMouseDown={scrollMouseDownHandler}
        onMouseUp={scrollMouseUpHandler}
        onMouseLeave={scrollMouseLeaveHandler}
        onMouseMove={scrollMouseMoveHandler}
        onScroll={handleScroll}>
        {props.children}
      </ul>
      <div
        ref={scrollbarContainerRef}
        className="bs-wrapper mt-28 relative w-full before:content-[''] before:bg-bs-dark dark:before:bg-bs-pink before:w-full before:opacity-[0.25] left-0 before:block before:h-[0.1vw] before:xl:h-[2px] ease-in duration-700">
        <div
          ref={scrollbarRef}
          className="xl:h-[2px] h-[0.1vw] bg-bs-dark dark:bg-bs-pink absolute top-0 ease-in duration-700"></div>
      </div>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        ref={cursorRef}
        className={`xl:hidden bg-bs-pink absolute pointer-events-none top-1/2 right-[2.25vw] -translate-y-[110%] z-10 inline-flex items-center justify-center 
        before:content-[''] before:width-0 before:height-0 before:inline-block before:absolute before:-left-[1.5vw] before:border-b-[0.5vw] before:border-b-bs-transparent before:border-t-[0.5vw] before:border-t-bs-transparent before:ease-linear before:duration-150 before:border-r-[0.55vw] before:border-r-bs-pink 
        after:content-[''] after:width-0 after:height-0 after:inline-block after:absolute after:-right-[1.5vw] after:border-b-[0.5vw] after:border-b-bs-transparent  after:border-t-[0.5vw] after:border-t-bs-transparent after:border-t-transparent after:ease-linear after:duration-150 after:border-l-[0.55vw] after:border-l-bs-pink 
        ease-linear duration-150 ${
          isDown ? "w-[5vw] h-[5vw]" : "w-[8.25vw] h-[8.25vw]"
        } ${
          isDown
            ? ""
            : "before:border-opacity-0 before:ease-linear before:duration-150  before:-left-[30px] after:border-opacity-0 after:ease-linear after:duration-150  after:-right-[30px]"
        } rounded-full `}>
        <span
          className={`font-extrabold uppercase text-sm text-bs-dark ease-linear duration-150 ${
            isDown ? "invisible" : "block"
          }`}>
          Drag
        </span>
      </motion.div>
    </div>
  );
};

export default Carousel;
