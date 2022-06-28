import React from "react";
import { Link } from "react-router-dom";

const InputState = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <input
        className=" w-full sm:w-[400px] tracking-tight font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
        type="email"
        name="email"
        placeholder="Sign In with your email address"
      />
      <p className="font-inter font-semibold text-slate-600 text-[13px] mt-4 mb-4 ">
        New to MetaDev?{" "}
        <Link to={"/sign-up"}>
          <span className="text-pink-500 underline cursor-pointer">
            Sign Up
          </span>
        </Link>{" "}
        for free
      </p>
    </div>
  );
};

export default InputState;
