import React from "react";
import Carousel from "../../components/carousel";
import { PageProps } from "gatsby";

const FeaturedEngagements = ({
  data,
}: PageProps<Queries.GridShowcaseQuery["clients"]>) => {

  return (
    <div className="w-full ">
      <div className="bs-wrapper border-t border-bs-dark dark:border-bs-pink w-full">
        <div className="flex mt-4">
          <span className="block w-1/3 text-bs-dark dark:text-bs-pink text-sm">00</span>
          <div className="w-2/3 flex justify-between">
            <span className="text-bs-dark dark:text-bs-pink text-sm">/05</span>
            <span className="text-bs-dark dark:text-bs-pink text-sm">●</span>
          </div>
        </div>

        <h2 className="text-bs-dark dark:text-bs-pink text-[42px] leading-[46px] uppercase font-extrabold block w-1/3 mt-[4.5rem] mb-32">
          Featured Engagements
        </h2>
      </div>
      <div  className="mb-20">
        <Carousel>
          {data.edges.map((edge) => {
            return (
              <li
                className="w-[23.5%] shrink-0 mr-24 first:ml-[5%] last:mr-[5%]"
                key={edge.node?.id}>
                <div className="relative h-10 inline-block overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 272 92"
                    width="272"
                    height="92"
                    className="block w-full h-auto pointer-events-none"></svg>
                  <img
                    src={`images/${edge.node.frontmatter?.featuredImage?.relativePath}`}
                    alt={edge.node.frontmatter?.featuredImgAlt as string}
                    loading="lazy"
                    className="w-auto h-full object-contain absolute left-0 top-0"
                  />
                </div>
                <h3 className="relative text-2xl uppercase font-scoto font-extrabold text-bs-dark dark:text-bs-pink mt-4 pt-[5.5rem] before:content-[''] before:w-[1.3rem] before:h-[0.13rem] before:bg-bs-dark before:absolute before:block before:top-0 before:left-0 ease-in duration-700">
                  {edge.node.frontmatter?.title}
                </h3>
                <p className="text-bs-dark dark:text-bs-pink text-lg leading-[25px] font-bold antialiased mt-5 ease-in duration-700">
                  {edge.node.internal.content}
                </p>
              </li>
            );
          })}
        </Carousel>
       
      </div>
    </div>
  );
};

export default FeaturedEngagements;
