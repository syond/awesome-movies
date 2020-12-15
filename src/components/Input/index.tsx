import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
  placeholder: string;
  children: React.ReactNode;
}

const Input: React.FC<Props> = ({ label, name, placeholder, children, ...rest }) => {
  return (
    <div id="search-container">
      { label ? <label htmlFor={name}>{label}</label> : "" }
      
      <input type="text" id={name} placeholder={placeholder} {...rest} />

      {children}
    </div>
  );
};

export default Input;
