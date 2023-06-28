import React from "react";

const Card = ({ image, name }) => {
  return (
    <div className="flex flex-col w-full sm:w-64 h-64">
      <img src={image} alt="card" className="w-full h-full object-cover" />
      <span className="text-center mt-2">{name}</span>
    </div>
  );
}

export default Card;
