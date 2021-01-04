import React, { useState } from "react";

import "./styles.css";

import Menu from "../Menu";
import Button from "../Button";

import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav>
      <span className="menu-icon">
        <FiMenu size={30} onClick={() => setshowMenu(!showMenu)} />
      </span>
      {showMenu ? <Menu /> : ""}

      <span>
        <Button name="Login" />
      </span>
    </nav>
  );
};

export default Navbar;
