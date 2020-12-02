import React, { ReactNode } from "react";

import "./styles.css";

import Header from "../Header";
import Navbar from "../Navbar";
import Main from "../Main";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {  
  return (
    <div id="container">
      { children }
    </div>
  );
};

export default Layout;
