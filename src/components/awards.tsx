import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

interface AwardsProps {
  items: {
    id: number;
    logoURL: string;
    displayText: string;
    path: string;
  }[];
}
const Awards = ({ items }: AwardsProps) => {
  return (
    <section className="py-[15vw] border-bs-dark border-b ">
      <ul className="flex items-center justify-around">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className="group flex flex-col items-center justify-center">
              <div className="w-[11vw] min-h-[100px] flex items-center justify-center">
                <img
                  src={`images/${item.logoURL}`}
                  className="w-full h-full object-contain object-center ease-linear duration-150 group-hover:scale-105 group-hover:ease-linear group:hover:duration-150"
                  alt={item.displayText}
                />
              </div>
              <span className="text-[0.85rem] font-bold antialiased uppercase tracking-normal text-bs-dark text-center block max-w-[14vw] leading-relaxed mt-6 group-hover:underline group-hover:decoration-[0.15vw]">
                {item.displayText}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;
