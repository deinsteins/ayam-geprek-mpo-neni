import React from "react";

const Footer = () => {
  return (
    <div className="flex py-8 bg-[#B21600]">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-12 mx-auto">
        <img src="/images/logo2.png" alt="Logo" className="w-26 h-16 md:w-26 md:h-16" />
        <h1 className="my-auto text-2xl md:text-3xl text-white font-extrabold italic mx-auto">
          HALAL, LEZAT, BERKUALITAS
        </h1>
      </div>
    </div>
  );
};

export default Footer;
