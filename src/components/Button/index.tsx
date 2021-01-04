import React, { ButtonHTMLAttributes } from "react";

import "./styles.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<Props> = ({ name, ...rest }) => {
  return (
    <button {...rest}>
      {name}
    </button>
  );
};

export default Button;
