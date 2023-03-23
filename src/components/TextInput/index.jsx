import P from 'prop-types';
import './styless.css';
import React from "react";

export const TextInput = ({searchValue,handleChange,placeholder}) => {
    return (
        <input
            className='text-input'
            onChange={handleChange}
            type="search"
            value={searchValue}
            placeholder={placeholder}
        />
    );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
  placeholder: P.string.isRequired
}
