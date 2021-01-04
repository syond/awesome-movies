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

      {children}
    </header>
  );
};

export default Header;
