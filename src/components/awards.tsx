import React from "react";
import { Link, PageProps } from "gatsby";

const Awards = ({ data }: PageProps<Queries.GridShowcaseQuery["awards"]>) => {
  return (
    <section className="py-[15vw] border-bs-dark border-b ">
      <ul className="flex items-center justify-around">
        {data.edges.map((edge) => (
          <li key={edge.node.id}>
            <Link
              to={edge.node.frontmatter?.path as string}
              className="group flex flex-col items-center justify-center">
              <div className="sm:w-[20vw] sm:min-h-[80px] xl:w-[15vw] xl:w-min-h-[120px] w-[11vw] min-h-[100px] flex items-center justify-center">
                <img
                  src={`images/${edge.node.frontmatter?.featuredImage?.relativePath}`}
                  className="w-full h-full object-contain object-center ease-linear duration-150 group-hover:scale-105 group-hover:ease-linear group:hover:duration-150"
                  alt={edge.node.frontmatter?.title as string}
                />
              </div>
              <span className="sm:text-[1.15rem] xl:text-[0.6rem] text-[0.85rem] font-bold antialiased uppercase tracking-normal text-bs-dark text-center block sm:max-w-[28vw] xl:max-w-[30vw] max-w-[14vw] sm:leading-normal leading-relaxed mt-6 group-hover:underline group-hover:decoration-[0.15vw]">
                {edge.node.internal.content}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;
