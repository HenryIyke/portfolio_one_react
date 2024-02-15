import React from "react";

const Button = ({ className, btnText, btnIcon, space }) => {
  return (
    <button className={className}>
      {btnIcon}
      {space}
      {btnText}
    </button>
  );
};

export default Button;
