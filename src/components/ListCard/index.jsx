import React from "react";
import listmenu from "../../data/menu.json";

const ListCard = ({ name, image }) => {
  return (
    <div className="flex flex-col bg-[#B21600] mt-4 py-12 px-8 md:px-24 gap-4 md:gap-12">
      <div className="flex flex-col w-full h-64 md:w-80 md:h-80 bg-white shadow-black shadow">
        <img className="w-48 h-44 md:w-72 md:h-64 p-4 mx-auto" src={image} alt="card" />
        <span className="text-[#B21600] font-bold text-center">{name}</span>
      </div>
      <div className="flex flex-col gap-4">
        {listmenu.list_menu.map((menu) => {
          return (
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 my-auto">
              <span className="text-white font-bold w-full text-xl">{menu.name}</span>
              <span className="text-[#FFD324] font-bold text-xl min-w-[7rem]">{menu.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCard;
