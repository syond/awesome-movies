import React, { ReactNode } from "react";

import "./styles.css";

interface Props {
  children: ReactNode;
}

const List: React.FC<Props> = ({ children }) => {
  return <ul className="movies-grid">{children}</ul>;
};

export default List;
