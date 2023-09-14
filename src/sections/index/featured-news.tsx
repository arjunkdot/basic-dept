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
    <section className="mt-40">
      <h2 className="text-bs-dark dark:text-bs-pink text-[42px] leading-[46px] uppercase font-extrabold block w-1/3 mt-[4.5rem] mb-16">
        Featured
        <br /> News
      </h2>
      <ul>
        {data.edges.map((edge) => {
          return (
            <li key={edge.node.frontmatter?.id} className="w-full border-bs-dark dark:border-bs-pink border-t pt-5 pb-20 group">
              <Link to="/" className="flex items-stretch">
                <div className="w-1/3 relative overflow-hidden">
                  <svg
                    className="block w-full h-auto pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 734"
                    width="1000"
                    height="734"></svg>
                  <figure>
                    <GatsbyImage
                    className="absolute top-0 left-0 w-full h-full object-cover scale-[105%] ease ease-default duration-300 group-hover:scale-[100%] group-hover:ease group-hover:ease-default group-hover:duration-300"
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
                <div className="w-2/3 pl-5 relative">
                  <h3 className="text-bs-dark dark:text-bs-pink uppercase font-scoto font-bold antialased text-[2.6rem] leading-[2.85rem] max-w-[80%] group-hover:underline">
                    {edge.node.frontmatter?.title}
                  </h3>

                  <figure className="h-[1.875rem] w-[1.875rem] right-0 top-2 absolute overflow-hidden">
                    <svg
                      className="absolute fill-bs-dark dark:fill-bs-pink h-[1.875rem] w-[1.875rem] group-hover:animate-arrow-lead"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17 17">
                      <path d="M.1 7.5h14v2H.1z"></path>
                      <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                      <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                    </svg>
                  </figure>

                  <span className="absolute left-5 bottom-0 text-bs-dark dark:text-bs-pink uppercase text-sm leading-4">
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
