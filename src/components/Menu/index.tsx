import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Menu = () => {
  return (
    <div id="menu-container">
      <Link to={"/"}>Now playing Movies</Link>
      <Link to={"/upcoming"}>Upcoming Movies</Link>
    </div>
  );
};

export default Menu;
