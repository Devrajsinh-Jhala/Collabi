import React from "react";

const CompanyLogo = ({ company, image }) => {
  return (
    <div
      className=" p-1 sm:p-3 flex flex-col items-center justify-center rounded-xl bg-white"
      key={company}
    >
      {" "}
      <img src={image} className="w-full" alt={image} />{" "}
      <div className="font-bold tracking-[-0.02em] text-[14px] sm:text-base mt-2 text-center">
        {company}
      </div>
    </div>
  );
};

export default CompanyLogo;
