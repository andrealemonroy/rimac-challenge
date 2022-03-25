import React, { ReactNode, useState, useRef } from "react";
import { SelectContext } from "./SelectContext";

const Select: React.FC<{
  children: ReactNode | ReactNode[];
  defaultValue?: string;
  placeholder?: string;
}> = ({ children, defaultValue, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);


  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className="select-container" ref={selectContainerRef}>
        <div
          className={showDropdown ? "selected-text active" : "selected-text"}
          onClick={showDropdownHandler}
        >
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
        </div>
        <ul
          className={
            showDropdown
              ? "select-options show-dropdown-options"
              : "select-options hide-dropdown-options"
          }
        >
          {children}
        </ul>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
