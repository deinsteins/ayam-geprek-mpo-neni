import React from "react";

const Button = ({ title, background, color, OnClick }) => {
  return (
    <div className="flex">
      <button
        onClick={OnClick}
        style={{ background, color }}
        className="px-4 py-2 rounded font-bold sm:px-6 sm:py-3"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
