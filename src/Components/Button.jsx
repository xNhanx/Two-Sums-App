import React from "react";

const Button = (props) => {
  const handleClick = () => {
    props.refresh();
  };
  return (
    <button onClick={handleClick} className="button">
      <span>Refresh</span>
    </button>
  );
};

export default Button;
