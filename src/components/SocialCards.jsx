import React from "react";

const SocialCards = ({ heading, description, icon }) => {
  return (
    <div className=" px-3 hover:border-slate-400 h-[190px] cursor-pointer w-[328px] rounded-md bg-white border-2 flex flex-col justify-start items-center ">
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
  );
};

export default SocialCards;
