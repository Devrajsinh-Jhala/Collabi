import React from "react";
import Image from "../assets/Background Image 1.png";
import AuthenticationButton from "../components/AuthenticationButton";
import SignInInputElement from "../components/SignInInputElement";
import Logo from "../assets/Metadev Logo Image.png";
import SignUpButton from "../components/SignUpButton";
import { BsGoogle } from "react-icons/bs";
import MetaMaskButton from "../components/MetaMaskButton";

const SignIn = () => {
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
            <SignInInputElement />
            <AuthenticationButton link={"sign-in-otp"} text={"Continue"} />

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

export default SignIn;
