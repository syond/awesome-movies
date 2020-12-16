import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={"/"}>Now playing Movies</Link>
      <Link to={"/upcoming"}>Upcoming Movies</Link>
    </nav>
  );
};

export default Navbar;
