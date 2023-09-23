import React from "react";
import LinkButton from "../../components/link-button";

const Spotlight = () => {
  return (
    <section className="flex sm:flex-wrap-reverse mt-24">
      <div className="sm:w-full w-1/2 xl:min-h-0 xl:h-auto min-h-[650px] h-[100vh] pt-20 sticky top-0">
        <h2 className="uppercase sm:text-[4.25rem] xl:text-[2.75rem] text-[5.5rem] leading-[1] font-extrabold mb-5 text-bs-dark dark:text-bs-pink">
          Basic/Dept&reg; Helps brands ● Connect w/ culture
        </h2>
        <div className="uppercase sm:text-2xl xl:text-sm text-lg sm:mt-10 sm:mb-14 xl:mb-6 mb-20 text-bs-dark dark:text-bs-pink">
          <span className="me-1">Adweek</span>
          <span className="font-extrabold">Agency Spotlight</span>
        </div>
        <LinkButton path="/" text="About us" />
      </div>
      <div className="sm:w-full w-1/2 sm:px-0 xl:px-5 pt-20">
        <video loop autoPlay muted className="w-full h-auto">
            <source  src="./videos/culture-loop.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default Spotlight;
