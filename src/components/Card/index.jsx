import React from "react";

const Card = ({ image, name }) => {
    return (
       <div className="flex flex-col w-80 h-80">
        <img src={image} alt="card" />
        <span>{name}</span>
       </div>
    )
}

export default Card;