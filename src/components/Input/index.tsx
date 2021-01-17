import React from "react";

import { IInputComponentProps } from "../../interfaces";

import "./styles.css";

const Input: React.FC<IInputComponentProps> = ({
  label,
  name,
  placeholder,
  children,
  ...rest
}) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : ""}

      <input type="text" id={name} placeholder={placeholder} {...rest} />

      {children}
    </>
  );
};

export default Input;
