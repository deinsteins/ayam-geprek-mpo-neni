import React from "react";

const Hero = () => {
    return (
        <>
        <div className="flex justify-between bg-[#B21600] px-4 py-2">
            <img src="/images/hero.png" alt="Hero" />
        </div>
        <div className="flex">
          <button className="bg-white ml-12 px-4 py-1 rounded text-[#B21600] font-bold"> <a href="https://linktr.ee/AyamGeprekMponeni">Order Online</a></button>
          <span className="text-white ml-2 font-semibold my-auto">TERSEDIA DI</span>
          <div className="flex gap-2 ml-2">
            <a href="https://shopee.co.id/universal-link/now-food/shop/20096483?deep_and_deferred=1&shareChannel=copy_link"><img src="/images/shopee.png" alt="shopee" className="w-[35px]" /></a>
            <a href="https://food.grab.com/id/id/restaurant/ayam-geprek-mpo-neni-bojong-rawalumbu-delivery/6-C2TVN3MCTFAHKA"><img src="/images/grabfood.png" alt="grab" className="w-[35px]" /></a>
            <a href="https://gofood.link/a/AVF54Vo"><img src="/images/gofood.png" alt="gofood" className="w-[35px]" /></a>
          </div>
        </div>
        </>
    )
}

export default Hero;