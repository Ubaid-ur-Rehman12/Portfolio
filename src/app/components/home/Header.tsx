import Image from "next/image";
import React from "react";
import image from "../../../../public/image.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
function Header() {
  return (
    <div id="home" className="flex md:flex-row flex-col justify-between">
      <div className=" mt-16 sm:ml-7 ml-4 mr-4 sm:order-1 -order-2 ">
        <div className="z-10 flex flex-col justify-center">
          <Image
            src={image}
            alt="logo"
            className="rounded-3xl sm:h-[28rem] sm:w-[23rem] w-[17rem] sm:ml-5 ml-3 "
          />
        </div>
        <div className="w-48 sm:h-[26.5rem] h-[19.5rem] bg-[#ffbf00] sm:mt-[-25rem] mt-[-18.5rem] rounded-2xl"></div>
      </div>
      <div className="sm:w-[34rem] w-auto mt-40 sm:order-2 -order-3">
        <h1 className="sm:text-3xl text-xl sm:ml-20 mx-10 text-[#ffbf00] font-bold">
          I'M UBAID-UR-REHMAN.
        </h1>
        <h1 className="sm:text-3xl text-xl sm:ml-20 ml-10 mt-1 font-bold text-[#ffffff]">
          Front-end Developer
        </h1>
        <p className="mt-5 sm:text-md text:sm sm:mx-0 mx-5">
          I'm Pakistani based web Designer and front-end Developer focused on
          crafting clean & user-friendly experience. I'm passionate about
          building excellent software that improves the life of those around me.
        </p>
        <div className="mt-7 border rounded-full border-[#ffbf00] flex flex-row w-60 justify-between sm:ml-0 ml-5">
          <a href="#about">
          <div className="m-3 pl-4">MORE ABOUT ME</div>
          </a>
          <div className="bg-[#ffbf00] p-4 rounded-full">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-40 mr-5 sm:order-3 -order-1">
        <a href="#home">
        <div className="bg-[#ffbf00] w-10 h-10 rounded-full flex justify-center items-center my-3">
          <AiFillHome />
        </div>
        </a>
        <a href="#about">
        <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center">
          <BsFillPersonFill />
        </div>
        </a>
        <a href="#projects">
        <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center my-3">
          <MdWork />
        </div>
        </a>
        <a href="#contact">
        <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center">
          <BiMessageRoundedDetail />
        </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
