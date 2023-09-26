import React from "react";
import Header from "./header";
import type { PageProps } from "gatsby";
import Footer from "./footer";
import LoadingScreen from "../components/loading-screen";

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
    <LoadingScreen />
    <div id="scroll-container" data-scroll-container>
      <Header />
      {children}
      <Footer />
    </div>
    </>
  );
};

export default Layout;
