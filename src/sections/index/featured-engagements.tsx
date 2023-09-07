import React from "react";
import Carousel from "../../components/carousel";
const FeaturedEngagements = () => {
  return (
    <div className="border-t border-bs-dark w-full">
      <div className="flex mt-4">
        <span className="block w-1/3 text-bs-dark text-sm">00</span>
        <div className="w-2/3 flex justify-between">
          <span className="text-bs-dark text-sm">/05</span>
          <span className="text-bs-dark text-sm">●</span>
        </div>
      </div>

      <h2 className="text-bs-dark text-[42px] leading-[46px] uppercase font-bold block w-1/3 mt-[4.5rem] mb-32">
        Featured Engagements
      </h2>

      <Carousel>
        <li className="w-[26%]">
          <div className="relative h-10 inline-block overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="272" height="92" className="block w-full h-auto pointer-events-none"></svg>
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&amp;fm=webp&amp;q=65"
              alt="Google"
              loading="lazy"
              className="w-auto h-full object-contain absolute left-0 top-0"
            />
          </div>
          <h3 className="relative text-2xl uppercase font-bold text-bs-dark mt-4 pt-[5.5rem] before:content-[''] before:w-[1.3rem] before:h-[0.13rem] before:bg-bs-dark before:absolute before:block before:top-0 before:left-0">Google</h3>
          <p className="text-bs-dark text-lg leading-[25px] mt-5">
            Our embedded partnership with Google is as deep as it gets.
            We&apos;re the lead creative agency for Google Store and provide
            strategy, design, and prototyping to other divisions. Learn more
            about our partnership.
          </p>
        </li>
      </Carousel>
    </div>
  );
};

export default FeaturedEngagements;
