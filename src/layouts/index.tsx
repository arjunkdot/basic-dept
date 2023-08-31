import React from "react";
import type { PageProps } from "gatsby";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<PageProps> = ({ children }: LayoutProps) => {
  return <div className="mx-auto w-full max-w-[90%] py-5">
    <header className="w-full">
      <nav>
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>News</li>
          <li>Thinking</li>
        </ul>
      </nav>
    </header>
    {children}
    </div>;
};

export default Layout;
