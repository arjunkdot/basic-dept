import React from "react";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <footer className="bg-bs-dark text-bs-light w-full">
      <div className="bs-wrapper xl:py-14 py-28">
        <div className="w-full flex xl:flex-col align-top justify-between gap-5">
          <div className="xl:w-full w-1/2">
            <figure className="sm:w-[5.725rem] xl:w-[3.125rem] w-[4.25rem] sm:h-[3.5rem] xl:h-[1rem] h-[1.375rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 307 100"
                className="fill-bs-light w-full h-full">
                <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path>
              </svg>
            </figure>
          </div>
          <div className="xl:w-full w-1/2">
            <p className="sm:text-[2.5rem] xl:text-xl text-[2rem] sm:leading-10 xl:leading-5 leading-8 font-semibold antialiased xl:mt-[2rem] sm:mr-[8rem] xl:mr-[8.5rem] mr-[6.9rem]">
              We collaborate with ambitious brands and people. Let's build.&nbsp;
              <a
                className="underline decoration-3 sm:block"
                href="mailto:biz@basicagency.com">
                 biz@basicagency.com
              </a>
            </p>
          </div>
        </div>
        <div className="w-full flex xl:flex-col align-top justify-between gap-5 xl:mt-[4.5rem] mt-[10.125rem]">
          <div className="xl:w-full xl:mb-9 w-1/2">
            <form className="xl:mr-0 mr-28">
              <label
                htmlFor="email"
                className="relative sm:pl-8 xl:pl-5 pl-6 uppercase tracking-wide sm:text-2xl xl:text-sm text-lg before:content-['●'] before:absolute before:inline-block xl:before:-top-[.2rem] xl:before:left-0  before:-left-[.1rem]">
                Stay in the know
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="bg-bs-transparent font-scoto font-normal sm:text-2xl xl:text-sm text-lg placeholder:text-bs-light placeholder:opacity-80 outline-none ease-default w-full sm:h-[6.5rem] h-[3.438rem] leading-[3.438rem] duration-150 border-b border-bs-light focus:outline-none focus:border-b-2"
                />
                <button
                  type="submit"
                  aria-label="Submit"
                  name="Submit"
                  value="Submit"
                  className="absolute right-0 sm:bottom-10 bottom-5">
                  <figure className="sm:w-[2rem] w-[1.125rem] sm:h-[2rem] h-[1.125rem]">
                    <svg
                      className="fill-bs-light w-full h-full group-hover:animate-arrow-lead"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17">
                      <path d="M.1 7.5h14v2H.1z"></path>
                      <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                      <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                    </svg>
                  </figure>
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 flex xl:flex-col xl:gap-14 justify-between pr-[6.9rem]">
            <div>
              <h4 className="relative sm:pl-8 xl:pl-5 pl-6 uppercase tracking-wide sm:text-2xl xl:text-sm text-lg before:content-['●'] before:absolute before:inline-block xl:before:left-0  before:-left-[.1rem]">
                Social
              </h4>
              <ul className="mt-4">
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <a href="#" target="_blank" className="group-hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="group  sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <a href="#" target="_blank" className="group-hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <a href="#" target="_blank" className="group-hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <a href="#" target="_blank" className="group-hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="relative sm:text-2xl sm:pl-8 xl:pl-5 pl-6 uppercase tracking-wide xl:text-sm text-lg before:content-['●'] before:absolute before:inline-block xl:before:left-0  before:-left-[.1rem]">
                Initiatives
              </h4>
              <ul className="mt-4">
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Crafted
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Applied
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Brandbeats
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Moves
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    B&reg;/Good
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="relative sm:pl-8 xl:pl-5 pl-6 uppercase tracking-wide sm:text-2xl xl:text-sm text-lg before:content-['●'] before:absolute before:inline-block xl:before:left-0  before:-left-[.1rem]">
                Offices
              </h4>
              <ul className="mt-4">
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    San Diego – CA
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    New York – NY
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Bay Area – CA
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    St. Louis – MO
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Amsterdam – NL
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    London – EN
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Berlin – GE
                  </Link>
                </li>
                <li className="group sm:text-2xl xl:text-sm text-lg antialiased leading-[1.5rem]">
                  <Link to="/" className="group-hover:underline">
                    Argentina – AR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-bs-extradark text-bs-grey w-full sm:py-9 xl:py-4 py-6">
        <div className="bs-wrapper flex xl:flex-col xl:items-center xl:justify-center align-middle justify-between sm:text-xl sm:gap-1 text-[.688rem] antialiased uppercase">
          <span>BASIC/DEPT®, INC 10 - 23©</span>
          <span>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</span>
          <span>
            <Link to="/"className="font-bold hover:underline">Terms</Link>,<Link to="/"className="font-bold hover:underline">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
