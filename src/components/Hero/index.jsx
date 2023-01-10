import React from "react";

const Hero = () => {
    return (
        <>
        <div className="flex justify-between bg-[#B21600] px-4 py-2">
            <img src="/images/hero.png" alt="Hero" />
        </div>
        <div className="flex">
          <button className="bg-white ml-12 px-4 py-1 rounded text-[#B21600] font-bold">Order Online</button>
          <span className="text-white ml-2 font-semibold my-auto">TERSEDIA DI</span>
          <div className="flex gap-2 ml-2">
            <a href=""><img src="/images/gofood.png" alt="gofood" className="w-[35px]" /></a>
            <a href=""><img src="/images/grabfood.png" alt="grab" className="w-[35px]" /></a>
            <a href=""><img src="/images/shoope.png" alt="shoope" className="w-[35px]" /></a>
          </div>
        </div>
        </>
    )
}

export default Hero;