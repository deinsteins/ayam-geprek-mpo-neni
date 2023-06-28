import React from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between bg-[#B21600] px-4 py-2">
        <a href="/">
          <img src="/images/Logo.png" alt="Logo" />
        </a>
        <div className="hidden md:flex gap-8 my-auto text-[#FFD324] text-xl font-bold px-8">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/location">Tentang Kami</a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" bg-[#bc210c] py-2 px-4 sticky text-center">
          <a
            href="/"
            className="block text-[#FFD324] text-xl font-bold my-2"
          >
            Home
          </a>
          <a
            href="/menu"
            className="block text-[#FFD324] text-xl font-bold my-2"
          >
            Menu
          </a>
          <a
            href="/location"
            className="block text-[#FFD324] text-xl font-bold my-2"
          >
            Tentang Kami
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
