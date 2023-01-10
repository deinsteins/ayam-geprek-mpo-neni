import React from "react";

const Card = ({ image }) => {
    return (
       <div className="flex w-80 h-80">
        <img src={image} alt="card" />
       </div>
    )
}

export default Card;