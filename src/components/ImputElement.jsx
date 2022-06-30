import React from "react";
import { Link } from "react-router-dom";

const InputElement = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[35px] mb-[15px]">
      <div>
        <p className="font-inter  text-black text-[18px] mb-8 ">
          Sign Up and Explore the Metaverse for Developers
        </p>
        <p className="font-inter font-semibold text-black text-[13px] mb-2 ">
          Email Address
        </p>
        <input
          className=" w-full sm:w-[400px] tracking-tight font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none  py-[20px] h-[46px] "
          type="email"
          name="email"
          placeholder="example@example.com"
        />
        <p className="font-inter font-semibold text-slate-600 text-[13px] mt-4 mb-4 ">
          Have a MetaDev Account? Please{" "}
          <Link to={"/sign-in"}>
            <span className="text-pink-500 underline cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default InputElement;
