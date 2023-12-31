import React from "react";
import { Link } from "gatsby";
import { PageProps } from "gatsby";

interface LinkButtonProps {
  path: string;
  text: string;
}
const LinkButton = ({ path, text }: LinkButtonProps) => {
  return (
    <Link
      className="relative inline-block rounded-full overflow-hidden border text-bs-dark dark:text-bs-pink border-bs-dark dark:border-bs-pink uppercase sm:py-[0.75rem] sm:px-[2.75rem]  py-[0.4rem] px-[2.25rem] font-extrabold sm:text-xl text-xs ease-default duration-200 before:content-[''] before:absolute before:w-full before:h-full before:bg-bs-dark dark:before:bg-bs-pink before:left-0 before:-bottom-[4rem] before:-z-10 before:ease-default before:duration-300 hover:text-bs-light dark:hover:text-bs-dark hover:ease-default hover:duration-200 hover:before:bottom-0 hover:before:left-0 hover:before:ease-default hover:before:duration-200"
      to={path}>
      {text}
    </Link>
  );
};

export default LinkButton;
