import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import useMobile from "../hooks/useMobile";
import { Link } from "gatsby";
import HeaderMenu, { ResponsiveHeaderMenu } from "./header-menu";
const headerNavItems = [
  {
    id: 1,
    label: "Work",
    path: "work",
  },
  {
    id: 2,
    label: "About",
    path: "about",
  },
  {
    id: 3,
    label: "News",
    path: "news",
  },
  {
    id: 4,
    label: "Thinking",
    path: "thinking",
  },
  {
    id: 5,
    label: "Careers",
    path: "careers",
  },
  {
    id: 6,
    label: "Contact",
    path: "contact",
  },
];
const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrollPassed, setIsScrollPassed] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    setIsMenuVisible(true);
  };


  useEffect(() => {
    // For smooth scrolling
    const lenis = new Lenis({
      duration: 3,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // To hide / show navigation on scroll
    const downThreshould = -126;
    let mover = 0;
    const windowHeight = window.innerHeight;

    const handleScroll = () => {
      if (lenis.scroll > windowHeight) {
        // console.log('ADD')
        setIsScrollPassed(true);
      } else {
        // console.log('REMOVE')
        setIsScrollPassed(false);
      }
      let direction = lenis.direction;
      if (direction === 1) {
        // Down
        if (mover <= downThreshould) return;
        headerRef.current!.style.transform = `translateY(${--mover}px)`;
      } else if (direction === -1) {
        // Up
        if (mover > 0) return;
        headerRef.current!.style.transform = `translateY(${++mover}px)`;
      }
    };

    lenis.on("scroll", () => handleScroll());
  }, []);

  const isMobile = useMobile(1280);

  return (
    <>
      <div className="bs-noise-background"></div>
      <header
        ref={headerRef}
        className={`left-0 -top-1  z-10 fixed w-full ${
          isScrollPassed
            ? "bg-bs-light dark:bg-bs-dark bs-header-noise-background w-full xl:h-[6rem] h-[8.5rem]"
            : ""
        }`}>
        <div
          className={`bs-wrapper fixed flex justify-between items-center  w-full xl:h-[6rem] h-[8.5rem]  top-0 left-1/2 translate-x-[-50%]`}>
          <Link to="/">
            <figure className="sm:w-60 xl:w-32 w-40 h-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 208.3 27.7"
                className={`${
                  isScrollPassed ? "fill-bs-dark" : "fill-bs-light"
                }  dark:fill-bs-pink`}>
                <path d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0v23.3zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4zm.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5zM38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1l1.1 3.8zM32.5 5.9l2.9 9.5h-5.9l3-9.5zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7zM67.3 24.1h6.4V.7h-6.4v23.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6zM113.7 0h-5.2l-10 27.7h5.2l10-27.7zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7zm-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3zM139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2v23.4zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1zm-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3zM181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181v5.5zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8zm0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
                <path d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8zm-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7h2.5z"></path>
              </svg>
            </figure>
          </Link>
          <nav className="w-[48%] max-w-[40vw] mr-[9rem] xl:hidden">
            <ul className="flex justify-between uppercase text-sm text-bs-light dark:text-bs-pink">
              {headerNavItems.map((item) => (
                <li
                  key={item.id}
                  className={`relative after:content-[''] text-[0.875rem] after:absolute after:w-[0%] after:h-[1px] after:right-0 after:bottom-[2px]   ${
                    isScrollPassed
                      ? "after:bg-bs-dark  dark:after:bg-bs-pink"
                      : "after:bg-bs-light dark:after:bg-bs-pink"
                  } after:ease-default after:duration-300 hover:after:w-[100%] hover:after:left-0 hover:after:ease-default hover:after:duration-300`}>
                  <Link
                    to={item.path}
                    className={` ${
                      isScrollPassed
                        ? "text-bs-dark  dark:text-bs-pink"
                        : "text-bs-light dark:text-bs-pink"
                    }`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="group w-10 h-10 rounded-full cursor-pointer xl:hidden"
            onClick={showMenu}>
            <span
              className={`w-[0.4vw] h-[0.4vw] relative inline-block ${
                isScrollPassed
                  ? "bg-bs-dark dark:bg-bs-pink"
                  : "bg-bs-light dark:bg-bs-pink"
              }   rounded-full ease-default after:content-[''] after:inline-block after:absolute ${
                isScrollPassed
                  ? "after:bg-bs-dark after:dark:bg-bs-pink"
                  : "after:bg-bs-light after:dark:bg-bs-pink"
              } after:w-[0.4vw] after:h-[0.4vw] after:rounded-full after:left-[0.6vw] after:ease-default after:duration-150 before:content-[''] before:inline-block before:absolute ${
                isScrollPassed
                  ? "before:bg-bs-dark before:dark:bg-bs-pink"
                  : "before:bg-bs-light before:dark:bg-bs-pink"
              } before:w-[0.4vw] before:h-[0.4vw] before:rounded-full before:right-[0.6vw] before:ease-default before:duration-150 group-hover:after:left-[0.65vw] group-hover:before:right-[0.65vw] group-hover:before:ease-default group-hover:before:duration-150 group-hover:after:ease-default group-hover:after:duration-150`}></span>
          </button>
          <button
          onClick={showMenu}
            className={`relative after:content-[''] text-bs-light sm:text-[1.75rem] text-[0.875rem] uppercase after:absolute after:w-[0%] after:h-[1px] after:right-0 after:bottom-[2px]   ${
              isScrollPassed
                ? "after:bg-bs-dark text-bs-light  dark:after:bg-bs-pink dark:text-bs-pink"
                : "after:bg-bs-light dark:after:bg-bs-pink"
            } after:ease-default after:duration-300 hover:after:w-[100%] hover:after:left-0 hover:after:ease-default hover:after:duration-300 hidden xl:block`}>
              Menu
            </button>
        </div>
      </header>
      {isMenuVisible && (isMobile ? <ResponsiveHeaderMenu menuItems={headerNavItems} setIsMenuVisible={setIsMenuVisible} /> : <HeaderMenu setIsMenuVisible={setIsMenuVisible} />)}

    </>
  );
};

export default Header;
