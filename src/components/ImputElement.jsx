import React from "react";

const InputElement = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[35px] mb-[15px]">
      <div>
        <p className="font-inter font-semibold text-black text-[16px] mb-2 ">
          Sign Up and Explore the Metaverse for Developers
        </p>
        <input
          className="w-[400px] tracking-tight font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
          type="email"
          name="email"
          placeholder="Sign up with your email"
        />
        <p className="font-inter font-semibold text-black text-[13px] mt-4 mb-4 ">
          Have a MetaDev Account? Please Sign In
        </p>
      </div>
    </div>
  );
};

export default InputElement;
