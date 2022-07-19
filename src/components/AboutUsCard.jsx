import React from "react";

const AboutUsCard = ({ description }) => {
  return (
    <div className="bg-gray-200 w-full sm:w-[336px] h-fit mb-8 rounded-xl flex items-center justify-center px-6 py-5">
      <div className="pt-3 mt-2 mb-5 font-inter text-[15px] leading-6 ">
        {description}
      </div>
    </div>
  );
};

export default AboutUsCard;
