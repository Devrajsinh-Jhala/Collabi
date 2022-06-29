import React from "react";
import Image from "../assets/Background Image 1.png";
import Logo from "../assets/Metadev Logo Image.png";
import OtpInput from "../components/OtpInput";

const OtpVerification = () => {
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left  ">
        <img
          className=" h-[100%] hidden sm:flex lg:w-[550px] object-cover"
          src={Image}
          alt={Image}
        />
      </div>
      <div className="flex flex-col items-center mt-24 ">
        <div className="right flex flex-col items-center justify-center m-4 sm:ml-[70px]">
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
              <button className="pt-3 font-semibold pl-2 font-inter rounded-full text-slate-500 hover:text-slate-900 bg-[white]">
                Sign In with password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
