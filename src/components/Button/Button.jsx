import React, { useState } from "react";
import "./button.css";

function Button(props) {
  const [color, setColor] = useState("rgb(108, 204, 79)");

  function handleClick() {
    // props.onClick();
    setColor(props.color);
  }

  return (
    <button 
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default Button;