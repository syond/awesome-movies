import React, { InputHTMLAttributes } from "react";

import Input from "../Input";

import "./styles.css";

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
    return (
        <div id="search-container">
            <Input name="search" placeholder="Search for any movie" {...rest} />
        </div>
    );
}

export default SearchInput;
