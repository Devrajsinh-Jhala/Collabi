import React from "react";
import { useState } from "react";

const SocialCards = ({ heading, description, icon }) => {
  const [clicked, setClicked] = useState(false);
  const handleCheck = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div
        onClick={handleCheck}
        className={` ${
          clicked
            ? "border-2 border-slate-400"
            : "border-2 hover:border-slate-400"
        } px-3 h-[190px] cursor-pointer w-[328px] rounded-md bg-white  flex flex-col justify-start items-center `}
      >
        <div className="text-center flex flex-col items-center justify-start">
          <img className="w-12 mt-5 mb-3  text-center" src={icon} alt={icon} />
          <p className="text-base mt-2 mb-2  font-semibold font-inter leading-5 ">
            {heading}
          </p>
        </div>
        <div>
          <p className=" text-center font-inter text-[#737577]  leading-[1.3rem] text-[14px] tracking-[-0.015em]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialCards;
