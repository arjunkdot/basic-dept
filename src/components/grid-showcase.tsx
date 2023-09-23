import { PageProps, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { ImageDataLike, IGatsbyImageData } from "gatsby-plugin-image";

const GridShowcase = ({ data }: PageProps<Queries.GridShowcaseQuery["caseStudies"]>) => {
  return (
    <section>
      <ul className="grid grid-cols-3 gap-6 mt-20 mb-20">
        {data.edges.map((edge) => {
          return (
            <li key={edge.node?.id} className="group overflow-hidden">
              <Link to={edge.node?.frontmatter?.path as string}>
                <div className="relative overflow-hidden">
                  {edge.node?.frontmatter?.mediaType === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full scale-105">
                      <source
                        src={edge.node.frontmatter.featureVideoURL as string}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 720 900"
                        width="720"
                        height="900"
                        className="block pointer-events-none w-full h-auto"></svg>
                      <GatsbyImage
                        className="absolute left-0 top-0 w-full h-full scale-105 ease-default duration-300 origin-center group-hover:scale-100 group-hover:ease-default group-hover:duration-300"
                        image={
                          getImage(
                            edge.node?.frontmatter?.featuredImage
                              ?.childImageSharp
                              ?.gatsbyImageData as ImageDataLike
                          ) as IGatsbyImageData
                        }
                        alt={edge.node?.frontmatter?.featuredImgAlt as string}
                      />
                    </>
                  )}
                </div>
                <h2 className="uppercase text-[1.375rem] font-extrabold mt-5 text-bs-dark dark:text-bs-pink group-hover:underline">
                  {edge.node?.frontmatter?.title}
                </h2>
                <p className="text-bs-dark  dark:text-bs-pink uppercase tracking-wide leading-[1.15rem] antialiased font-bold text-sm mt-2 max-w-[12vw]">
                  {edge.node?.frontmatter?.excerpt}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GridShowcase;
