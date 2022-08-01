import React from "react";

import Logo from "../assets/Metadev Logo Image.png";
import OtpInput from "../components/OtpInput";

const OtpVerification = () => {
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0 ">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[500px] bg-[#f1f5f9] xl:w-[600px] 2xl:w-[700px] object-cover" />
      </div>
      <div className="flex flex-col relative sm:right-0 lg:-right-[500px] xl:-right-[600px] 2xl:-right-[800px] items-center mt-24 ">
        <div className="right flex 2xl:mt-20 flex-col items-center justify-center m-4 sm:ml-[70px]">
          <div>
            <img className="w-36" src={Logo} alt={Logo} />
            <OtpInput
              text={"Check your email for code"}
              subText={"We have sent a 6 - character code to"}
              boldText={"tempemail@collabi.com"}
            />
            <p className="text-slate-400 mt-3 mb-3 font-inter text-[14px]">
              Or click on the button in that email
            </p>

            <div className="flex flex-row items-center justify-start">
              <button className="pt-3 font-semibold pr-2 font-inter rounded-full text-slate-500 hover:text-slate-900 bg-[white]">
                Use a different Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
