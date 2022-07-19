import React from "react";

const AboutUsBigCards = ({
  primary,
  subHeading,
  heading,
  description,
  description2,
  authorName,
  date,
}) => {
  return (
    <div
      className={`w-[740px] rounded-xl cursor-pointer hover:-translate-y-4 duration-200 ease-in-out px-7 py-6 mt-10 mb-10 flex flex-col ${primary} text-white  items-start justify-start`}
    >
      <p className="text-[26px] font-inter leading-8 mt-4 tracking-[-0.5px] font-bold">
        {heading}
      </p>
      <p
        className={`text-[15px] ${
          description2 === "" ? "mb-4" : "mb-0"
        } font-inter  leading-6 mt-4 pr-5`}
      >
        {description}
      </p>
      {description2 === "" ? (
        <></>
      ) : (
        <p className="text-[15px] mb-4 font-inter leading-6 mt-4 pr-5">
          {description2}
        </p>
      )}
    </div>
  );
};

export default AboutUsBigCards;
