import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
function About() {
  return (
    <>
      <div id="about" className="text-center text-3xl font-bold ">
        ABOUT<span className="text-[#ffbf00]"> ME</span>
      </div>
      <div className="flex flex-row justify-between mb-10">
        <div>
          <h1 className="ml-32 text-2xl font-bold mt-20">Personal Infos</h1>
          <div className="flex flex-row mt-5">
            <div className="ml-32 mr-20">
              <h1 className="my-5">First Name : Ubaid-ur-Rehman</h1>
              <h1>Age : 16Years</h1>
              <h1 className="my-5">Freelance : Available</h1>
            </div>
            <div>
              <h1 className="my-5">last Name : M.Shakeel</h1>
              <h1>Nationality : Pakistani</h1>
              <h1 className="my-5">Email : rubaid690@gamail.com</h1>
            </div>
          </div>
          
          <a href="https://firebasestorage.googleapis.com/v0/b/storage-e6557.appspot.com/o/book.pdf?alt=media&token=0abb6778-4464-4875-ba6c-34acee1fb613" target="_blank" 
          >
            <div className="mt-7 border ml-32 rounded-full border-[#ffbf00] flex flex-row w-56 justify-between">
              <div className="m-3 pl-4">Download CV</div>
              <div className="bg-[#ffbf00] p-4 rounded-full">
                <AiOutlineDownload size={"20px"} />
              </div>
            </div>
            </a>
          
        </div>
        <div className="flex flex-row mt-20">
          <div>
            <div className="w-40 h-28 border border-[#ffbf00]">
              <h1 className="text-2xl ml-5 mt-3 font-extrabold text-[#ffbf00]">
                1
              </h1>
              <h2 className="w-[4rem] ml-10">Years of Experience</h2>
            </div>
            <div className="w-40 h-28 mt-5 border border-[#ffbf00]">
              <h1 className="text-2xl ml-5 mt-3 font-extrabold text-[#ffbf00]">
                20
              </h1>
              <h2 className="w-[4rem] ml-10">Happy Customers</h2>
            </div>
          </div>
          <div className="ml-5">
            <div className="w-40 h-28 border border-[#ffbf00]">
              <h1 className="text-2xl ml-5 mt-3 font-extrabold text-[#ffbf00]">
                30
              </h1>
              <h2 className="w-[4rem] ml-10">Completed Projects</h2>
            </div>
            <div className="w-40 h-28 mt-5 border border-[#ffbf00]">
              <h1 className="text-2xl ml-5 mt-3 font-extrabold text-[#ffbf00]">
                2
              </h1>
              <h2 className="w-[4rem] ml-10">Awards Won</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-24 mr-5">
          <a href="#home">
            <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center my-3">
              <AiFillHome />
            </div>
          </a>
          <a href="#about">
            <div className="bg-[#ffbf00] w-10 h-10 rounded-full flex justify-center items-center">
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
    </>
  );
}

export default About;
