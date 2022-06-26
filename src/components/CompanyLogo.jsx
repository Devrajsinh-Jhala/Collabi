import React from "react";

const CompanyLogo = ({ company, image }) => {
  return (
    <div
      className=" flex flex-col items-center justify-start rounded-xl bg-white"
      key={company}
    >
      {" "}
      <img src={image} className="w-full pt-6 pr-7 pl-7" alt={image} />{" "}
      <div className="font-bold tracking-[-0.02em] text-[14px] mt-2 mb-1 sm:text-base text-center">
        {company}
      </div>
    </div>
  );
};

export default CompanyLogo;
