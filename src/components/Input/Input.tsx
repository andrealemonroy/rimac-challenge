import React from "react";

export const Input = (props) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        autoComplete="off"
        className=""
      />
    </div>
  );
};