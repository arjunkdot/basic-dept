import { Link, PageProps } from "gatsby";
import {
  GatsbyImage,
  ImageDataLike,
  IGatsbyImageData,
  getImage,
} from "gatsby-plugin-image";
import React from "react";
const FeaturedNews = ({
  data,
}: PageProps<Queries.GridShowcaseQuery["blogs"]>) => {
  return (
    <section className="xl:mt-12 mt-40 sm:mb-28 xl:mb-20 mb-36 ">
      <h2 className="text-bs-dark dark:text-bs-pink sm:text-[2.625rem] xl:text-2xl text-[2.625rem] sm:leading-10 leading-[2.875rem] uppercase font-extrabold antialiased block sm:w-1/3 xl:w-full w-[250px] mt-[4.5rem] xl:mb-10 mb-16">
        Featured News
      </h2>
      <ul>
        {data.edges.map((edge) => {
          return (
            <li key={edge.node.frontmatter?.id} className="w-full border-bs-dark dark:border-bs-pink border-t sm:pt-10 pt-5 sm:pb-8 pb-20 group">
              <Link to="/" className="flex sm:flex-col items-stretch">
                <div className="sm:w-full w-1/3 relative overflow-hidden">
                  <svg
                    className="block w-full h-auto pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 734"
                    width="1000"
                    height="734"></svg>
                  <figure>
                    <GatsbyImage
                    className="absolute featured-news-image top-0 left-0 w-full h-full object-cover scale-[105%] ease ease-default duration-300 group-hover:scale-[100%] group-hover:ease group-hover:ease-default group-hover:duration-300"
                      image={
                        getImage(
                          edge.node.frontmatter?.featuredImage?.childImageSharp
                            ?.gatsbyImageData as ImageDataLike
                        ) as IGatsbyImageData
                      }
                      alt={edge.node.frontmatter?.featuredImageAlt as string}
                    />
                  </figure>
                </div>
                <div className="sm:w-full w-2/3 sm:pl-0 pl-5 sm:mt-10 relative">
                  <h3 className="text-bs-dark dark:text-bs-pink uppercase sm:mb-24 font-scoto sm:font-bold xl:font-normal font-bold antialased sm:text-[2.5rem] xl:text-[1.4rem] text-[2.6rem] sm:leading-[2.8rem] xl:leading-[1.75rem] leading-[2.85rem] sm:max-w-full max-w-[80%] group-hover:underline">
                    {edge.node.frontmatter?.title}
                  </h3>

                  <figure className="sm:h-[2.25rem] sm:w-[2.25rem] h-[1.875rem] w-[1.875rem] sm:bottom-0 sm:top-auto sm:right-0 right-0 top-2 absolute overflow-hidden">
                    <svg
                      className="absolute fill-bs-dark dark:fill-bs-pink sm:h-[2.25rem] sm:w-[2.25rem] h-[1.875rem] w-[1.875rem] group-hover:animate-arrow-lead"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17">
                      <path d="M.1 7.5h14v2H.1z"></path>
                      <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                      <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                    </svg>
                  </figure>

                  <span className="sm:relative absolute sm:left-0 left-5 bottom-0 text-bs-dark dark:text-bs-pink uppercase sm:text-xl xl:text-[0.7rem] text-sm leading-4">
                    <strong className="mr-1">{edge.node.frontmatter?.category}</strong>{edge.node.frontmatter?.date}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FeaturedNews;
