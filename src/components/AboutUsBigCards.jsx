import React from "react";

const AboutUsBigCards = ({
  subHeading,
  heading,
  description,
  authorName,
  date,
}) => {
  return (
    <div className="w-[740px] rounded-xl cursor-pointer hover:-translate-y-4 duration-200 ease-in-out px-7 py-6 mt-10 mb-10 flex flex-col bg-slate-400 text-white  items-start justify-start">
      <p className="text-[13px] font-inter">{subHeading}</p>
      <p className="text-[26px] font-inter leading-8 mt-8 tracking-[-0.5px] font-bold">
        {heading}
      </p>
      <p className="text-base font-inter leading-6 mt-4 pr-5">{description}</p>

      <p className="text-[13px] mt-8 font-inter">{authorName}</p>
      <p className="text-[13px] mt-2 font-inter">{date}</p>
    </div>
  );
};

export default AboutUsBigCards;
