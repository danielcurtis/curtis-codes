import React from "react";
import { FaSun } from "react-icons/fa";

function Sunshine(props) {
  const handleClick = () => props.onClick && props.onClick('light');
  return (
    <div
      className="theme-toggle"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      >
      <FaSun color="#F6AD55" />
    </div>
  );
}

export default Sunshine;
