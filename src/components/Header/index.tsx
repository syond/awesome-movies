import React from "react";

import "./styles.css";

interface Props {
  children?: React.ReactNode;
  title: string;
}

const Header: React.FC<Props> = ({ children, title }) => {
  return (
    <header>
      <h1>{title}</h1>

      <span>Developed by <strong><a target="_blank" href="https://github.com/syond">Syond Santos</a></strong></span>

      {children}
    </header>
  );
};

export default Header;
