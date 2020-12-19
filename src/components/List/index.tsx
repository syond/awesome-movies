import React, { ReactNode } from "react";

import "./styles.css";

interface Props {
  title: string;
  children: ReactNode;
}

const List: React.FC<Props> = ({ children, title }) => {
  return (
    <div id="list-container">
      <strong>{title}</strong>
      <ul className="movies-grid">{children}</ul>
    </div>
  );
};

export default List;
