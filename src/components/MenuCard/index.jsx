import React from "react";

const MenuCard = ({ image, name }) => {
  return (
    <div className="flex flex-col">
      <img className="w-48 h-48 md:w-64 md:h-64 rounded" src={image} alt="MenuCard" />
      <span className="text-white md:text-center font-bold text-sm md:text-lg">{name}</span>
    </div>
  );
};

export default MenuCard;
