import React from "react";
import parse from 'html-react-parser';
import Carousel from "../../components/carousel";
import { PageProps } from "gatsby";

const FeaturedEngagements = ({
  data,
}: PageProps<Queries.GridShowcaseQuery["clients"]>) => {

  return (
    <div className="w-full">
      <div className="bs-wrapper border-t border-bs-dark dark:border-bs-pink w-full">
        <div className="flex xl:flex-wrap mt-4">
          <span className="block xl:w-full w-1/3 text-bs-dark dark:text-bs-pink sm:text-xl xl:text-xs text-sm">00</span>
          <div className="xl:w-full w-2/3 flex justify-between">
            <span className="text-bs-dark dark:text-bs-pink sm:text-xl xl:text-xs text-sm">/05</span>
            <span className="text-bs-dark dark:text-bs-pink  sm:text-xl xl:text-xs text-sm">●</span>
          </div>
        </div>

        <h2 className="text-bs-dark dark:text-bs-pink sm:text-[2.625rem] xl:text-2xl text-[2.625rem] sm:leading-[3rem] leading-[2.875rem] uppercase font-extrabold block sm:w-1/3 xl:w-full w-1/3 xl:mt-16 mt-[4.5rem] sm:mb-32 xl:mb-16 mb-32">
          Featured Engagements
        </h2>
      </div>
      <div  className="mb-20">
        <Carousel>
          {data.edges.map((edge) => {
            return (
              <li
                className="sm:w-[80%] xl:w-[42%] w-[23.5%] shrink-0 sm:mr-8 xl:mr-3 mr-24 first:ml-[5%] last:mr-[5%]"
                key={edge.node?.id}>
                <div className="relative sm:h-[40px] h-10 inline-block overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 272 92"
                    width="272"
                    height="92"
                    className="block w-full h-auto pointer-events-none absolute"></svg>
                  <img
                    src={`images/${edge.node.frontmatter?.featuredImage?.relativePath}`}
                    alt={edge.node.frontmatter?.featuredImgAlt as string}
                    loading="lazy"
                    className="w-auto h-full object-contain absolute left-0 top-0"
                  />
                </div>
                <h3 className="relative sm:text-[2rem] xl:text-lg text-2xl uppercase font-scoto font-extrabold text-bs-dark dark:text-bs-pink sm:mt-6 mt-4 sm:pt[5rem] sm:pt-[6rem] xl:pt-[3rem] pt-[5.5rem] before:content-[''] before:sm:w-[20px] before:w-[1.3rem] before:sm:h-[2px] before:h-[0.13rem] before:bg-bs-dark before:absolute before:block before:top-0 before:left-0 ease-in duration-700">
                  {edge.node.frontmatter?.title}
                </h3>
                <div className="text-bs-dark dark:text-bs-pink sm:text-[1.7rem] xl:text-[0.8rem] text-lg xl:leading-normal leading-[1.563] font-bold antialiased sm:mt-10 mt-5 ease-in duration-700 bs-link-underline">
                  {parse(edge.node.html as string)}
                </div>
              </li>
            );
          })}
        </Carousel>
       
      </div>
    </div>
  );
};

export default FeaturedEngagements;
