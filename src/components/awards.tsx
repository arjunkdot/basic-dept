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
    <div>
      <ul className="flex items-center justify-around">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className="group flex flex-col items-center justify-center">
              <div className="w-[52%] min-h-[100px] flex items-center justify-center">
                <img
                  src={`images/${item.logoURL}`}
                  className="w-full h-full object-contain object-center ease-linear duration-150 group-hover:scale-105 group-hover:ease-linear group:hover:duration-150"
                  alt={item.displayText}
                />
              </div>
              <span className="text-xs uppercase tracking-normal text-bs-dark text-center block max-w-[60%] leading-relaxed mt-6 group-hover:underline group-hover:decoration-2">
                {item.displayText}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
