import React, { ReactNode } from "react";

import "./styles.css";

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
