import React from "react";

const NavBar = () => {
    return (
        <div className="sticky top-0 z-50">
            <div className="flex justify-between bg-[#B21600] px-4 py-2">
                <a href="/"><img src="/images/Logo.png" alt="Logo" /></a>
                <div className="flex gap-8 my-auto text-[#FFD324] text-xl font-bold px-8">
                    <a href="/">Home</a>
                    <a href="/menu">Menu</a>
                    <a href="/location">Tentang Kami</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;