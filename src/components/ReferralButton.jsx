import React from "react";
import { Link } from "react-router-dom";

const ReferralButton = ({ text }) => {
  return (
    <Link to={"/sign-up"}>
      <div className="mt-5 hover:bg-slate-700 bg-black hidden sm:block text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]">
        {text}
      </div>
    </Link>
  );
};

export default ReferralButton;
