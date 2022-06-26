import React from "react";
import Image from "../assets/Background Image 1.png";
import AuthenticationButton from "../components/AuthenticationButton";
import InputElement from "../components/ImputElement";
import Logo from "../assets/Metadev Logo Image.png";

const SignUp = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="left ">
        <img
          className=" h-[100%] hidden sm:flex lg:w-[550px] object-cover"
          src={Image}
          alt={Image}
        />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="right flex flex-col items-center justify-center m-4 sm:ml-[70px]">
          <div>
            <img className="w-36" src={Logo} alt={Logo} />
            <InputElement />
            <AuthenticationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
