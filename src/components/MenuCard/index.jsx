import React from "react";

const MenuCard = ({ image, name }) => {
    return (
       <div className="flex flex-col">
        <img className="w-64 h-64 rounded" src={image} alt="MenuCard" />
        <span className="text-white text-center font-bold">{name}</span>
       </div>
    )
}

export default MenuCard;