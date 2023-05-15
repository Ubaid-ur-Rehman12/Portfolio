import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import panaverse from "../../../../public/panaverse.png";
import governer from '../../../../public/governer.png';
import Image from "next/image";
import { saveAs } from 'file-saver';
import Link from "next/link";
function Projects() {
  return (
    <>
      <div id="projects" className="mt-20 text-center">
        <h1 className="font-bold text-2xl">
          My{" "}
          <span className="font-bold text-2xl text-[#ffbf00]"> Portfolio</span>
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col ml-28 mt-10">
          <div className="flex flex-row">
            <Link href={'https://panaverse-site-one.vercel.app/'}>
            <div className="mr-20">
              <Image src={panaverse} alt="logo" className="w-80 h-40 hover:scale-110 transition-all duration-[1s]" />
            </div>
            </Link>
            <Link href={'https://governor-website.vercel.app/'}>
            <div>
              <Image src={governer} alt="logo" className="w-80 h-40 hover:scale-110 transition-all duration-[1s]" />
            </div>
            </Link>
            <Link href={'https://panaverse-site-one.vercel.app/'}>
            <div className="mx-20">
              <Image src={panaverse} alt="logo" className="w-80 h-40 hover:scale-110 transition-all duration-[1s]" />
            </div>
            </Link>
          </div>
          <div className="flex flex-row mt-20">
          <Link href={'https://panaverse-site-one.vercel.app/'}>
            <div className="mr-20">
              <Image src={panaverse} alt="logo" className="w-80 h-40 hover:scale-110 transition-all duration-[1s]"/>
            </div>
            </Link>
            <div>
              <Image src={governer} alt="logo" className="w-80 h-40 hover:scale-110 transition-all duration-[1s]"/>
            </div>
            <Link href={'https://panaverse-site-one.vercel.app/'}>
            <div className="mx-20">
              <Image src={panaverse} alt="logo" className="w-80 h-40 hover:scale-110 transition-all duration-[1s]" />
            </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mr-5 mt-20">
        <a href="#home">
          <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center my-3">
            <AiFillHome />
          </div>
          </a>
          <a href="#about">
          <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center">
            <BsFillPersonFill />
          </div>
          </a>
          <a href="#projects">
          <div className="bg-[#ffbf00] w-10 h-10 rounded-full flex justify-center items-center my-3">
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
    </>
  );
}

export default Projects;
