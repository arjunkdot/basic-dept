import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Lenis from "@studio-freight/lenis";
import Carousel from "../components/carousel";
import {
  ImageDataLike,
  IGatsbyImageData,
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

interface HeaderMenuProps {
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderMenu = (props: HeaderMenuProps) => {
  const data = useStaticQuery(graphql`
    query InitiativeQuery {
      allMarkdownRemark(
        sort: { frontmatter: { order: ASC } }
        filter: { frontmatter: { type: { eq: "initiative" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              year
              order
              subtext
              link
              linkText
              featuredImageAlt
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
                }
              }
            }
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const hideMenu = () => {
    props.setIsMenuVisible(false);
  };
  return (
    <div className="bg-bs-dark fixed w-full h-full left-0 top-0 animate-menu-fadein z-50">
      <div className="animate-menu-reveal w-full h-full before:bg-bs-dark before:z-50 before:block before:left-0 before:top-0 before:fixed before:w-full before:h-full before:animate-menu-overlay-reveal">
        <div className="bs-wrapper relative flex h-[16vh] font-scoto text-bs-pink text-[0.9rem] leading-4 py-[3.5rem]">
          <p className='relative pl-14 w-[17vw] before:content-["●"] before:inline-block before:absolute before:-left-0'>
            (5) INTERNAL WORKS
            <br />
            &copy;23 c/o BASIC/DEPT&reg;
          </p>
          <p className="uppercase w-[30vw]">
            A collection of internal project and initiatives under the
            BASIC/DEPT® brand.
          </p>
          <button
            onClick={hideMenu}
            className="absolute right-0 top-[3.25rem] w-10 h-10 flex items-center justify-center border border-bs-light rounded-full">
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
        <div className="animate-menu-slide-in translate-x-[20%] ease-default duration-300">
          <Carousel>
            {data.allMarkdownRemark.edges.map((edge) => {
              return (
                <li
                  key={edge.node.frontmatter?.order}
                  className="relative  ease-linear duration-150 w-[29%] h-[72vh] first:ml-20 shrink-0 px-2 group before:content-[''] before:block before:absolute before:top-0 before:left-0 before:h-[95%] before:w-[1px] before:bg-bs-pink">
                  <span className="text-bs-pink text-xs absolute bottom-0 left-0">
                    {parseInt(edge.node?.frontmatter?.order).toLocaleString(
                      "en-US",
                      {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      }
                    )}
                  </span>
                  <div className="flex flex-col">
                    <div className="relative oveflow-hidden shrink-0 ease-default overflow-hidden duration-300 h-[calc(100vh-47vh)] group-hover:h-[calc(100vh-65vh)] group-hover:ease-default group-hover:duration-300">
                      <svg
                        className="block w-full h-auto pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 630 788"
                        width="630"
                        height="788"></svg>

                      <GatsbyImage
                        className="absolute top-0 left-0 w-full h-full object-cover ease-default duration-300 scale-[110%]  group-hover:scale-100 group-hover:ease-default group-hover:duration-300"
                        image={
                          getImage(
                            edge.node?.frontmatter?.featuredImage
                              ?.childImageSharp
                              ?.gatsbyImageData as ImageDataLike
                          ) as IGatsbyImageData
                        }
                        alt={edge.node?.frontmatter?.featuredImageAlt as string}
                      />
                    </div>
                    <div className="bg-bs-dark text-bs-pink relative py-5 px-2 shrink-0 max-h-[80px] ease-default duration-300 group-hover:max-h-fit group-hover:h-[20vh] group-hover:ease-default group-hover:duration-300">
                      <span className="text-[1.375rem] leading-6 font-extrabold antialiased uppercase">
                        {edge.node.frontmatter?.title}
                      </span>
                      <span className="absolute text-[1.375rem] leading-6 font-bold right-3">
                        &copy;{edge.node.frontmatter?.year}
                      </span>
                      <p className="text-xs leading-[0.875rem] mt-2 uppercase">
                        {edge.node.frontmatter?.subtext}
                      </p>
                      <p className="relative text-[0.875rem] max-w-[90%] leading-5 my-6 -top-3 opacity-0 ease-default duration-500 group-hover:top-0 group-hover:opacity-100 group-hover:ease-default group-hover:duration-500">
                        {edge.node.internal.content}
                      </p>
                      <a
                        href={edge.node.frontmatter?.link as string}
                        className="relative font-bold underline text-[0.875rem] leading-5 mb-8 -top-3 opacity-0 ease-default duration-500 group-hover:top-0 group-hover:opacity-100 group-hover:ease-default group-hover:duration-500">
                        {edge.node.frontmatter?.linkText}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </Carousel>
        </div>
        <div className="fixed w-full h-[50px] bottom-0">
          <div className="bs-wrapper flex items-center justify-between text-bs-grey text-[.875rem] leading-4 uppercase animate-menu-footer-fadein opacity-0">
            <p>Basic/Dept&reg;,Inc</p>
            <p>10-23&copy;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResponsiveHeaderMenuProps {
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: { id: number; label: string; path: string }[];
}
export const ResponsiveHeaderMenu = (props: ResponsiveHeaderMenuProps) => {
  const data = useStaticQuery(graphql`
    query InitiativeQuery {
      allMarkdownRemark(
        sort: { frontmatter: { order: ASC } }
        filter: { frontmatter: { type: { eq: "initiative" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              year
              order
              subtext
              link
              linkText
              featuredImageAlt
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
                }
              }
            }
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const [isInitiativesVisible, setIsInitiativesVisible] = useState(false);

  const hideRespMenu = () => {
    props.setIsMenuVisible(false);
  };

  const showInitiatives = () => {
    setIsInitiativesVisible(true);
  };
  const hideInitiatives = () => {
    setIsInitiativesVisible(false);
  };

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: document.querySelector(".bs-resp-menu-items") as HTMLElement,
      duration: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-bs-dark fixed top-0 left-0 w-full h-full z-30">
      <div className="bs-wrapper">
        <div className="xl:h-[6rem] h-[8.5rem] flex items-center justify-between">
          <figure className="sm:w-60 xl:w-32 w-40 h-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 208.3 27.7"
              className="fill-bs-pink">
              <path d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0v23.3zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4zm.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5zM38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1l1.1 3.8zM32.5 5.9l2.9 9.5h-5.9l3-9.5zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7zM67.3 24.1h6.4V.7h-6.4v23.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6zM113.7 0h-5.2l-10 27.7h5.2l10-27.7zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7zm-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3zM139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2v23.4zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1zm-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3zM181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181v5.5zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8zm0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
              <path d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8zm-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7h2.5z"></path>
            </svg>
          </figure>

          <button
            onClick={() => hideRespMenu()}
            className="flex items-center justify-center cursor-pointer bg-bs-transparent sm:w-[3.5rem] sm:h-[3.5rem] w-[1.875rem] h-[1.875rem] rounded-full border border-bs-light"
            aria-label="Close Menu"
            title="Close Menu">
            <figure className="sm:w-[1.5rem] w-[0.875rem] sm:h-[1.5rem] h-[0.875rem]">
              <svg
                className="fill-bs-light"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11.7 11.7">
                <path d="M0 10.6 10.6 0l1.1 1.1L1.1 11.7 0 10.6z"></path>
                <path d="M10.6 11.7 0 1.1 1.1 0l10.6 10.6-1.1 1.1z"></path>
              </svg>
            </figure>
          </button>
        </div>

        {!isInitiativesVisible && (
          <ul className="text-bs-pink xl:h-[calc(100vh_-_9rem)] sm:text-[2rem] text-2xl font-extrabold antialiased uppercase sm:pt-28 pt-10">
            {props.menuItems.map((item) => (
              <li key={item.id} className="sm:mb-[2.5rem] mb-4">
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            <li className="cursor-pointer" onClick={() => showInitiatives()}>
              Initiatives{" "}
              <figure className="relative fill-bs-pink inline-block -top-[.2rem] left-[.1rem] -rotate-90 w-[.875rem] h-[.625rem]">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14.1 8.5">
                  <path d="m14.1 1.4-7 7.1-1.4-1.4 7-7.1 1.4 1.4z"></path>
                  <path d="m1.4 0 7.1 7.1-1.4 1.4L0 1.4 1.4 0z"></path>
                </svg>
              </figure>
            </li>
          </ul>
        )}
      </div>

      <div className="bs-resp-menu-items xl:h-full overflow-y-auto pt-10 mt-6">
        {isInitiativesVisible && (
          <div className="bs-wrapper xl:before:content-[''] xl:before:block xl:before:z-40 xl:before:bg-bs-pink xl:before:fixed xl:before:left-0 xl:before:top-[7rem] xl:before:w-full xl:before:h-[1px]">
            <div className="flex items-start pb-5">
              <button
                onClick={() => hideInitiatives()}
                className="relative bg-bs-transparent w-[3rem] h-[3rem]"
                aria-label="Go back">
                <figure className="absolute -top-2 left-0 sm:w-[1.5rem] w-[.875rem] sm:h-[1.75rem] h-[.625rem] fill-bs-pink rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14.1 8.5">
                    <path d="m14.1 1.4-7 7.1-1.4-1.4 7-7.1 1.4 1.4z"></path>
                    <path d="m1.4 0 7.1 7.1-1.4 1.4L0 1.4 1.4 0z"></path>
                  </svg>
                </figure>
              </button>
              <div className="relative sm:pl-16 sm:max-w-[90%] sm:text-[1.2rem] text-[.65rem] before:content-['●'] before:block before:sm:text-[1.25rem] before:text-[.65rem] before:text-bs-pink before:relative before:-top-2">
                <p className="uppercase text-bs-pink">(5) Internal Works</p>
                <p className=" text-bs-pink ">&copy;23 c/o BASIC/DEPT&reg;</p>
                <p className="uppercase text-bs-pink">
                  A collection of internal project and initiatives underthe
                  BASIC/DEPT&reg; Brand.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-5 h-full">
              {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li
                    key={edge.node.frontmatter?.order}
                    className="sm:w-full w-[calc(50%_-_.6375rem)] border-t border-bs-pink relative">
                    <span className="sm:text-xl text-xs text-bs-pink absolute top-1 right-0">
                      {parseInt(edge.node?.frontmatter?.order).toLocaleString(
                        "en-US",
                        {
                          minimumIntegerDigits: 2,
                          useGrouping: false,
                        }
                      )}
                    </span>

                    <GatsbyImage
                      className="sm:mt-10 mt-6 h-max-[350px] object-cover"
                      image={
                        getImage(
                          edge.node?.frontmatter?.featuredImage?.childImageSharp
                            ?.gatsbyImageData as ImageDataLike
                        ) as IGatsbyImageData
                      }
                      alt={edge.node?.frontmatter?.featuredImageAlt as string}
                    />

                    <div className="sm:mt-12 mt-5 pb-20">
                      <div className="text-bs-pink relative">
                        <h5 className="font-extrabold antialiased uppercase sm:text-[2.15rem] text-lg">
                          {edge.node.frontmatter?.title}
                        </h5>
                        <span className="relative sm:top-4 -top-1 uppercase sm:text-[1.275rem] text-xs">
                          {edge.node.frontmatter?.subtext}
                        </span>
                        <p className="uppercase font-extrabold sm:text-[2.15rem] text-lg antialiased absolute right-0 top-0">
                          &copy;{edge.node.frontmatter?.year}
                        </p>
                        <p className="sm:text-[1.625rem] text-[0.825rem] sm:py-16 py-5">
                          {edge.node.internal.content}
                        </p>
                        <Link
                          to={edge.node.frontmatter?.link as string}
                          className="sm:text-[1.625rem] text-sm font-extrabold antialiased underline">
                          {edge.node.frontmatter?.linkText}
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full h-10">
        <div className="bs-wrapper">
          <div className="flex items-center h-5 justify-between">
            <span className="text-bs-grey sm:text-[1.25rem] text-[.65rem] uppercase">
              Basic/Dept&reg;, Inc
            </span>
            <span className="text-bs-grey sm:text-[1.25rem] text-[.65rem] uppercase">
              10 - 23&copy;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
