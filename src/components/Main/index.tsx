import React, { ReactNode } from "react";

import "./styles.css";

interface Props {
  children: ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
