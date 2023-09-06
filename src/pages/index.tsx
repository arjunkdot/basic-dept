import * as React from "react";
import type { Page } from "gatsby";
import {graphql, PageProps} from "gatsby"
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Awards from "../components/awards";
import { awards as awardsData, clients as clientsData } from "./index-data";
import LinkButton from "../components/link-button";
import GridShowcase from "../components/grid-showcase";

const IndexPage = ({data} : PageProps<Queries.GridShowcaseQuery>) => {

  const [cursorPosition, setCursorPosition] = React.useState({
    x: window.innerWidth / 2 - 60,
    y: window.innerHeight / 3 - 60,
  });
  const [cursorVariant, setCursorVariant] = React.useState("default");
  const variants = {
    active: {
      x: cursorPosition.x - 60,
      y: cursorPosition.y - 60,
    },
    reset: {
      x: window.innerWidth / 2 - 60,
      y: window.innerHeight / 3 - 60,
    },
  };

  const resetCursor = () => setCursorVariant("reset");
  const activateCursor = () => setCursorVariant("active");

  React.useEffect(() => {
    const cursorMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", cursorMove);

    return () => {
      window.removeEventListener("mousemove", cursorMove);
    };
  }, []);

  return (
    <>
      <div className="bs-noise-background"></div>
      <Helmet>
        <title>
          BASIC/DEPT® | Digital Branding &amp; Product Design Agency
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Helmet>

      <main>
        <div className="h-[100vh] w-full block relative">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="./videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div
            onMouseEnter={activateCursor}
            onMouseLeave={resetCursor}
            className="bs-cursor-container z-20 absolute w-full h-[calc(100vh_-_126px)] left-0 top-[126px]">
            <motion.div
              className="absolute z-10 top-0 left-0 uppercase font-bold text-sm"
              variants={variants}
              animate={cursorVariant}>
              <span className=" bg-bs-white w-[120px] h-[120px] rounded-full flex justify-center items-center px-5 text-center">
                Watch Reel
              </span>
              <span className="block text-center mt-3 text-bs-white text-sm">
                Basic/Dept&reg;
                <br />
                2010-∞
              </span>
            </motion.div>
          </div>
        </div>
        <div className="bs-wrapper ">
          <section className="py-52 border-b">
            <Awards items={awardsData} />
          </section>

          <section className="flex gap-x-10 items-start pt-20">
            <div className="w-1/2">
              <p className="text-4xl font-medium text-bs-dark mb-10">
                BASIC/DEPT&reg; is a global branding and digital design agency
                building products, servies, and eCommerce experiences that turn
                cultural values into company value.
              </p>
              <LinkButton path="/" text="See the Work"/>
            </div>
            <div className="w-1/2">
              <figure className="w-[80%] object-contain object-top ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100" fill="#252422">
                  <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path>
                </svg>
              </figure>
            </div>
          </section>

          <section>
           <GridShowcase data={data} />
          </section>
          
        </div>
      </main>
    </>
  );
};

export default IndexPage;


export const ShowCaseQuery = graphql`
  query GridShowcase {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            featuredImgAlt
            featureVideoURL
            mediaType
            path
            excerpt
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 500, placeholder: DOMINANT_COLOR)
              }
            }
          }
          id
        }
      }
    }
  }
`;