import React from "react";
import Header from "./header";
import type { PageProps } from "gatsby";

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <div id="scroll-container" data-scroll-container>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
