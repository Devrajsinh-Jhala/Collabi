import React, { useState } from "react";
import { AiOutlinePlusCircle, AiFillCheckCircle } from "react-icons/ai";

const GoalsBox = ({ text, subText }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-[330px] border h-fit border-slate-500 rounded-md">
      <div className="flex items-center px-4 py-2 justify-between">
        <p className="text-[18px] font-inter font-semibold">{text}</p>
        <div
          onClick={() => {
            setClicked(!clicked);
          }}
          className={` ${
            clicked ? "hidden" : "block"
          } text-[26px] cursor-pointer`}
        >
          <AiOutlinePlusCircle />
        </div>
        <div
          onClick={() => {
            setClicked(!clicked);
          }}
          className={` ${
            clicked ? "block" : "hidden"
          } text-[26px] cursor-pointer bg-white text-green-600`}
        >
          <AiFillCheckCircle />
        </div>
      </div>
      <div className="font-inter text-[14px] px-4 py-2">{subText}</div>
    </div>
  );
};

export default GoalsBox;
