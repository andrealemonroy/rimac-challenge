import React from "react";
import './Input.scss'
const Input = (props: {
  placeholder: any;
  name?: any;
  value?: any;
  handleInputChange?: any;
}) => {
  console.log(props)
  return (
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        autoComplete="off"
        className="input"
      />
  );
};

export default Input;
