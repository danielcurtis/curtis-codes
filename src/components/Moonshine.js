import React from "react";
import { FaMoon } from "react-icons/fa";

function Moonshine(props) {
  const handleClick = () => props.onClick && props.onClick('dark');
  return (
    <div
      className="theme-toggle"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      aria-label="toggle light mode"
      >
      <FaMoon color="#F6AD55"/>
    </div>
  );
}

export default Moonshine;
