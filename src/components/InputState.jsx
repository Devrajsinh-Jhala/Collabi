import React, { useState } from "react";
import { Link } from "react-router-dom";

const InputState = () => {
  const [inputState, setInputState] = useState("Email Address");
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex flex-row justify-between items-start">
        <button
          onClick={() => {
            setInputState("Email Address");
            setActive(true);
            setActive1(false);
          }}
          className={` ${
            active === true
              ? "text-slate-50 bg-slate-500"
              : "text-black bg-[#f1f1f1]"
          }   font-inter font-semibold text-white p-2 rounded-md bg-slate-500 text-[14px] `}
        >
          Email Address
        </button>
        <button
          onClick={() => {
            setInputState("Phone Number");
            setActive(false);
            setActive1(true);
          }}
          className={` ${
            active1 === true
              ? "text-slate-50 bg-slate-500"
              : "text-black bg-[#f1f1f1]"
          }   font-inter font-semibold text-white p-2 rounded-md bg-slate-500 text-[14px] `}
        >
          Phone Number
        </button>
      </div>
      <input
        className=" w-full sm:w-[400px] tracking-tight font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
        type="email"
        name="email"
        placeholder={
          inputState === "Phone Number"
            ? "+91 1234567890"
            : "example@example.com"
        }
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
