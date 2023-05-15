import React from "react";
import nextjs from "../../../../public/nextjs.png";
import tailwind from "../../../../public/Tailwind.png";
import html from "../../../../public/html.png";
import css from "../../../../public/css.png";
import javascript from "../../../../public/javascript.png";
import typescript from "../../../../public/typescript.png";
import react from "../../../../public/react.svg";
import chakra from "../../../../public/chakra.png";
import Image from "next/image";
function Skills() {
  return (
    <>
      <div className="mt-10 text-center">
        <h1 className="font-bold text-2xl">My Skills</h1>
      </div>
      <div className="flex flex-col mb-10">
        <div className="flex flex-row justify-center mt-20 ">
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl mr-14">
            <h1 className="py-7">Next js</h1>{" "}
            <Image
              src={nextjs}
              alt="nextjs"
              className="w-20 h-18 rounded-2xl"
            />
          </div>
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl ml-14">
            <h1 className="py-7">Tailwind Css</h1>{" "}
            <Image
              src={tailwind}
              alt="nextjs"
              className="w-20 h-18 rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10">
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl mr-14">
            <h1 className="py-7">HTML:5</h1>{" "}
            <Image src={html} alt="nextjs" className="w-20 h-18 rounded-2xl" />
          </div>
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl ml-14">
            <h1 className="py-7">Css</h1>{" "}
            <Image src={css} alt="nextjs" className="w-20 h-18 rounded-2xl" />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10">
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl mr-14">
            <h1 className="py-7">JavaScript</h1>{" "}
            <Image
              src={javascript}
              alt="nextjs"
              className="w-20 h-18 rounded-2xl"
            />
          </div>
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl ml-14">
            <h1 className="py-7">TypeScript</h1>{" "}
            <Image
              src={typescript}
              alt="nextjs"
              className="w-20 h-18 rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10">
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl mr-14">
            <h1 className="py-7">Chakra UI</h1>{" "}
            <Image src={react} alt="nextjs" className="w-20 h-18 rounded-2xl" />
          </div>
          <div className="w-96 h-20 pl-10 font-semibold text-xl justify-between  border flex border-[#ffbf00] rounded-2xl ml-14">
            <h1 className="py-7">React</h1>{" "}
            <Image
              src={chakra}
              alt="nextjs"
              className="w-20 h-18 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
