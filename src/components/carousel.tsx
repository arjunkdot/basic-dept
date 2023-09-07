import React, { PropsWithChildren } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
  return <ul className="flex gap-28">{children}</ul>;
};

export default Carousel;
