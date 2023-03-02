import React from "react";
import { FaRegBell } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-around md:justify-between items-center py-3">
        <div className="md:hidden w-8 h-8 flex items-center justify-center border border-white rounded-full text-white"><AiOutlinePlus/></div>
        <div className="flex space-x-6 items-center">
          <h2 className="text-2xl text-emerald-400 font-thin">
            <span className="font-semibold">LITE</span>FLIX
          </h2>
          <h2 className="text-white text-sm mt-1 hidden md:block">
            + AGREGAR PELÍCULA
          </h2>
        </div>
        <div className="flex md:space-x-10 text-white justify-center items-center">
          <div
            id="home_made_hamb"
            className="md:flex flex-col space-y-1 hidden"
          >
            <div className="w-[24px] h-[2px] bg-white"></div>
            <div className="w-[24px] h-[2px] bg-white"></div>
            <div className="w-[24px] h-[2px] bg-white"></div>
          </div>
          <div className="hidden md:flex">
            <FaRegBell className="text-2xl" />
          </div>
          <img
            src="https://www.agdelfino.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.18711f97.jpg&w=1080&q=75"
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
