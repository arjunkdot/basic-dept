import React from "react";
import Header from "./header";
import type { PageProps } from "gatsby";
import Footer from "./footer";

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <div id="scroll-container" data-scroll-container>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
