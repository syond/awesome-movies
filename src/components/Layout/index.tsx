import React, { ReactNode } from "react";

import "./styles.css";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {  
  return (
    <section>
      <div id="container">
        { children }
      </div>
    </section>
  );
};

export default Layout;
