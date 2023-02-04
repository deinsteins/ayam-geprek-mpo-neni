import React from "react";

const CardImage = ({ image, price }) => {
    return (
        <div className="flex flex-col text-center">
            <div className="flex bg-[#FFD324] rounded-full gap-4 w-28 h-28">
                <img className="w-[90px] h-[90px] m-auto" src={image} alt="product photo" />
            </div>
            <span className="text-xl text-[#B21600] font-bold">{price}</span>
        </div>
    )
}

export default CardImage;