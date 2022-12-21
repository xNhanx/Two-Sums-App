import React from "react";

const Numbers = (props) => {
  const handleStyle = () => {
    if (props.solution.includes(props.index)) {
      return "number-solution";
    } else {
      return "number";
    }
  };

  return <span className={handleStyle()}>{props.number}</span>;
};

export default Numbers;
