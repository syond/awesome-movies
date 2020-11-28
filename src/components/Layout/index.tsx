import React from "react";

import "./styles.css";

import Header from "../Header";
import Navbar from "../Navbar";
import Main from "../Main";

const Layout: React.FC = () => {
  return (
    <div id="home-container">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
};

export default Layout;
