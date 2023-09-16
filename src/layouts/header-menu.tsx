import React from "react";
import Carousel from "../components/carousel";

const HeaderMenu = () => {
  return (
    <div className="bg-bs-dark fixed w-full h-full left-0 top-0 z-50">
      <div className="bs-wrapper relative flex h-[16vh] font-scoto text-bs-pink text-[.875rem] leading-4 py-[3.5rem]">
        <p className='relative pl-14 w-[275px] before:content-["●"] before:inline-block before:absolute before:-left-0'>
          (5) INTERNAL WORKS
          <br />
          &copy;23 c/o BASIC/DEPT&reg;
        </p>
        <p className="uppercase w-[500px]">
          A collection of internal project and initiatives under the BASIC/DEPT®
          brand.
        </p>
        <button className="absolute right-0 top-[3.25rem] w-10 h-10 flex items-center justify-center border border-bs-light rounded-full">
          <figure>
            <svg
              className="fill-bs-light w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11.7 11.7">
              <path d="M0 10.6 10.6 0l1.1 1.1L1.1 11.7 0 10.6z"></path>
              <path d="M10.6 11.7 0 1.1 1.1 0l10.6 10.6-1.1 1.1z"></path>
            </svg>
          </figure>
        </button>
      </div>

      <Carousel>
        <ul className="w-full flex items-start pl-20 overflow-auto">
          <li className="relative w-[30%] h-[70vh] shrink-0 px-2 group before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-full before:w-[1px] before:bg-bs-pink">
            <div className="flex flex-col">
              <div className="relative oveflow-hidden shrink-0 ease-default overflow-hidden duration-300 h-[55vh] group-hover:h-[40vh] group-hover:ease-default group-hover:duration-300">
                <svg
                  className="block w-full h-auto pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 630 788"
                  width="630"
                  height="788"></svg>
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover ease-default duration-300 scale-[110%]  group-hover:scale-100 group-hover:ease-default group-hover:duration-300"
                  src="./images/jams.jpeg"
                  alt="Jams"
                />
              </div>
              <div className="bg-bs-dark text-bs-pink relative py-5 px-2 shrink-0 max-h-[80px] ease-default duration-300 group-hover:max-h-fit group-hover:h-[20vh] group-hover:ease-default group-hover:duration-300">
                <span className="text-[1.375rem] leading-6 font-bold uppercase">
                  B/D&reg; Jams
                </span>
                <span className="absolute text-[1.375rem] leading-6 font-bold right-3">
                  &copy;2022
                </span>
                <p className="text-xs leading-[0.875rem] uppercase">
                  It&apos;s a vibe
                </p>
                <p className="relative text-[0.875rem] leading-5 my-6 -top-3 opacity-0 ease-default duration-500 group-hover:top-0 group-hover:opacity-100 group-hover:ease-default group-hover:duration-500">
                  A weekly-ish playlist curated by the employees @
                  BASIC/DEPT&reg;
                </p>
                <a
                  href="#"
                  className="relative font-bold underline text-[0.875rem] leading-5 mb-8 -top-3 opacity-0 ease-default duration-500 group-hover:top-0 group-hover:opacity-100 group-hover:ease-default group-hover:duration-500">
                  Visit the Site
                </a>
              </div>
            </div>
          </li>

          <li className="relative w-[30%] h-[70vh] shrink-0 px-2 group before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-full before:w-[1px] before:bg-bs-pink">
            <div className="flex flex-col">
              <div className="relative oveflow-hidden shrink-0 ease-default overflow-hidden duration-300 h-[55vh] group-hover:h-[40vh] group-hover:ease-default group-hover:duration-300">
                <svg
                  className="block w-full h-auto pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 630 788"
                  width="630"
                  height="788"></svg>
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover ease-default duration-300 scale-[110%]  group-hover:scale-100 group-hover:ease-default group-hover:duration-300"
                  src="./images/applied.png"
                  alt="Jams"
                />
              </div>
              <div className="bg-bs-dark text-bs-pink relative py-5 px-2 shrink-0 max-h-[80px] ease-default duration-300 group-hover:max-h-fit group-hover:h-[20vh] group-hover:ease-default group-hover:duration-300">
                <span className="text-[1.375rem] leading-6 font-bold uppercase">
                  Applied&reg;
                </span>
                <span className="absolute text-[1.375rem] leading-6 font-bold right-3">
                  &copy;2020
                </span>
                <p className="text-xs leading-[0.875rem] uppercase">
                  Thoughts &amp; Perspectives
                </p>
                <p className="relative text-[0.875rem] leading-5 my-6 -top-3 opacity-0 ease-default duration-500 group-hover:top-0 group-hover:opacity-100 group-hover:ease-default group-hover:duration-500">
                  Our panel series and thought-leadership platform where we
                  share perspectives and tactics related to strategy, design,
                  and technology.
                </p>
                <a
                  href="#"
                  className="relative font-bold underline text-[0.875rem] leading-5 mb-8 -top-3 opacity-0 ease-default duration-500 group-hover:top-0 group-hover:opacity-100 group-hover:ease-default group-hover:duration-500">
                  Explore Applied
                </a>
              </div>
            </div>
          </li>
        </ul>
      </Carousel>

      <div className="fixed w-full h-[50px] bottom-0">
        <div className="bs-wrapper flex items-center justify-between text-bs-grey text-[.875rem] leading-4 uppercase">
          <p>Basic/Dept&reg;,Inc</p>
          <p>10-23&copy;</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
