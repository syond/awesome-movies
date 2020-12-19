import React from "react";

import "./styles.css";

import Navbar from "../Navbar";

interface Props{
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header>
      <Navbar />
      <h1>Welcome to Awesome Movies</h1>

      {children}
    </header>
  );
};

export default Header;
