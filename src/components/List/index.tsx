import React, { ReactNode } from "react";

import "./styles.css";

interface Props {
  title: string;
  children: ReactNode;
}

const List: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <h4>{title}</h4>
      <div id="list-container">
        <ul className="movies-grid">{children}</ul>
      </div>
    </>
  );
};

export default List;
