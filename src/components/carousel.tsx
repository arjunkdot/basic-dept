import React, { PropsWithChildren, useEffect, useRef } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
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
    
    if ( scrollbarWidth && scrollbarContainerWidth) {
        
      let carouselLeftPos = carouselRef.current?.scrollLeft;


      const scrollLeftTheshould = scrollbarContainerWidth - scrollbarWidth;
      
      if (carouselLeftPos && carouselLeftPos >= scrollLeftTheshould) {
        carouselLeftPos = scrollLeftTheshould;
      }
      scrollbarRef.current!.style.left = `${carouselLeftPos}px`;
    }
  }
  return (
    <>
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
    </>
  );
};

export default Carousel;
