import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CustomInput() {
  return (
    <div className="mt-10 w-full max-w-md flex relative rounded-[2rem]  border-black-300 focus:border-cyan-400  ">
      <input
        className="w-[100%] text-[1.05rem] rounded-[2rem] text-black outline-none p-[1rem] border-[3px] focus:border-cyan-400 transition duration-150  ease-in"
        placeholder="example@email.com"
      />
      <div className="bg-blue-600 hidden sm:block text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute right-[2.5%] bottom-[15%] px-[1.5rem]">
        Request invite
      </div>
      <div className="bg-blue-600 sm:hidden text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute right-[2.5%] bottom-[21%] px-[1.5rem]">
        <span className="text-white text-[16px]">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}
