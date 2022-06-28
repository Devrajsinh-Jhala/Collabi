import React from "react";
import { Link } from "react-router-dom";

const ReferralButton = ({ text }) => {
  return (
    <Link to={"/sign-up"}>
      <button className=" w-[180px] mt-5 font-inter md:w-[200px] h-[50px] bg-slate-500 rounded-full font-semibold text-[18px] hover:bg-gray-800 text-white">
        {text}
      </button>
    </Link>
  );
};

export default ReferralButton;
