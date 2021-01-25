import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Menu = () => {
  return (
    <div id="menu-container">
      <ul>
        <li><Link to={"/"}>Now playing Movies</Link></li>
        <li><Link to={"/upcoming"}>Upcoming Movies</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
