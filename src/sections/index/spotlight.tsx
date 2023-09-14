import React from "react";
import LinkButton from "../../components/link-button";

const Spotlight = () => {
  return (
    <section className="flex mt-24">
      <div className="w-1/2 min-h-[650px] h-[100vh] pt-20 sticky top-0">
        <h2 className="uppercase text-[5.5rem] leading-[1] font-extrabold mb-5 text-bs-dark dark:text-bs-pink">
          Basic/Dept&reg; Helps brands ● Connect w/ culture
        </h2>
        <div className="uppercase text-lg mb-20 text-bs-dark dark:text-bs-pink">
          <span className="me-1">Adweek</span>
          <span className="font-extrabold">Agency Spotlight</span>
        </div>
        <LinkButton path="/" text="About us" />
      </div>
      <div className="w-1/2 pt-20">
        <video loop autoPlay muted>
            <source  src="./videos/culture-loop.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default Spotlight;
