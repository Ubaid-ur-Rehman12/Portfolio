import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
function Contact() {
  return (
    <>
      <div id="contact" className="mt-32 text-center">
        <h1 className="font-bold text-2xl">
          GET IN{" "}
          <span className="font-bold text-2xl text-[#ffbf00]"> TOUCH</span>
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="w-80 ml-28 mt-20">
            <h1 className="font-bold text-lg">DON'T BE SHY!</h1>
            <p className="mt-2 text-md">
              Feel free to get in Touch with me. I am always open to discussing
              new projects,creative ideas or opportunities to be part of your
              vision.
            </p>
          </div>
          <div className="mt-5 flex flex-col ml-28">
            <div className="flex flex-row">
              <div className="bg-[#ffbf00] w-12 h-12 rounded-full flex justify-center items-center my-3">
                <HiOutlineMailOpen size={"30px"} />
              </div>
              <div className="mt-4 ml-4 text-sm">
                <h1>MAIL ME</h1>
                <h1>rubaid690@gmail.com</h1>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-[#ffbf00] w-12 h-12 rounded-full flex justify-center items-center my-3">
                <IoCall size={"30px"} />
              </div>
              <div className="mt-4 ml-4 text-sm">
                <h1>CALL ME</h1>
                <h1>+92310-2571583</h1>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-[#ffbf00] w-12 h-12 rounded-full flex justify-center items-center my-3">
                <MdLocationPin size={"30px"} />
              </div>
              <div className="mt-4 ml-4 text-sm">
                <h1>Address</h1>
                <h1>Karachi,Pakistan</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 shadow-md mx-32">
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="w-full px-3 py-2 mb-5 text-base font-normal bg-[#1f1f1f] rounded-full m-0 hover:bg-[#1f1f1f] outline-none"
                placeholder="First Name "
                required={true}
              />

              <input
                type="text"
                name="last_name"
                id="last_name"
                className="w-full px-3 py-2 mb-5 text-base font-normal bg-[#1f1f1f] rounded-full m-0 hover:bg-[#1f1f1f] outline-none"
                placeholder="Last Name "
              />
            </div>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 mb-5 text-base font-normal bg-[#1f1f1f] rounded-full m-0 hover:bg-[#1f1f1f] outline-none"
              placeholder="Email "
              required={true}
            />
            <input
              type="text"
              name="subject"
              className="w-full px-3 py-2 mb-5 text-base font-normal bg-[#1f1f1f] rounded-full m-0 hover:bg-[#1f1f1f] outline-none"
              placeholder="Subject "
              required={true}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required={true}
              className="w-full h-40 resize-none px-3 pt-1 mb-5 text-base font-normal bg-[#1f1f1f] rounded-lg hover:bg-[#1f1f1f] outline-none"
              rows={5}
              
            />

            <div className=" border  rounded-full border-[#ffbf00] flex flex-row w-56 justify-between">
              <div className="m-3 pl-4">Send message</div>
              <div className="bg-[#ffbf00] p-4 rounded-full">
                <BsFillSendFill size={"20px"} />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col mt-20 mr-5">
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
          <div className="bg-[#a09f9e] w-10 h-10 rounded-full flex justify-center items-center my-3">
            <MdWork />
          </div>
          </a>
          <a href="#contact">
          <div className="bg-[#ffbf00] w-10 h-10 rounded-full flex justify-center items-center">
            <BiMessageRoundedDetail />
          </div>
          </a>
        </div>
      </div>
      <div className="bg-[#ffbf00] text-center mt-20 flex justify-center h-10">
        <div className="my-1.5">
          <MdOutlineCopyright size={"30px"} />
        </div>
        <div className="my-2">
            <h1>Ubaid-ur-Rehman Copyrights</h1>
        </div>
      </div>
    </>
  );
}

export default Contact;
