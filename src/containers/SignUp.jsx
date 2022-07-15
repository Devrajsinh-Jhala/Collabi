import React from "react";
import AuthenticationButton from "../components/AuthenticationButton";
import InputElement from "../components/ImputElement";
import Logo from "../assets/Metadev Logo Image.png";
import SignUpButton from "../components/SignUpButton";
import { BsGoogle } from "react-icons/bs";
import MetaMaskButton from "../components/MetaMaskButton";

const SignUp = () => {
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0 ">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[500px] bg-[#f1f5f9] xl:w-[600px] 2xl:w-[900px] object-cover" />
      </div>
      <div className="flex flex-col relative sm:right-0 lg:-right-[500px] xl:-right-[600px] 2xl:-right-[1000px] items-center mt-20 ">
        <div className="right flex  flex-col items-center justify-center m-4 sm:ml-[70px]">
          <div>
            <img className="w-36" src={Logo} alt={Logo} />
            <InputElement />
            <AuthenticationButton
              link={"otp-verification"}
              text={"Create Account"}
            />

            <div className=" mt-24 md:mt-20 md:mb-8">
              <span className="text-slate-600 font-inter font-semibold">
                Or Sign In With
              </span>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <SignUpButton icon={<BsGoogle />} name={"Google"} />
                <MetaMaskButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
