import React from "react";

const Button = ({ title, background, color}) => {
    return (
        <div className="flex">
          <button style={{ background, color}} className="px-4 py-1 rounded font-bold">{title}</button>
        </div>
    )
}

export default Button;