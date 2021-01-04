import React, { ReactNode } from "react";

import "./styles.css";

import Navbar from "../Navbar";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {  
  return (
    <>
    {/* // <section> */}
    <Navbar />
      <div id="container">
        { children }
      </div>
    {/* // </section> */}
    </>
  );
};

export default Layout;
