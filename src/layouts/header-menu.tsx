import React from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import Carousel from "../components/carousel";
import {
  ImageDataLike,
  IGatsbyImageData,
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

interface HeaderMenuProps {
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>,
}
const HeaderMenu = (props : HeaderMenuProps) => {
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

export default HeaderMenu;