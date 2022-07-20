import React from "react";
import { RiLock2Line } from "react-icons/ri";
import { BsGoogle, BsFacebook } from "react-icons/bs";

const FinishRegistration = () => {
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0 ">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[400px] bg-[#f1f5f9] xl:w-[500px] 2xl:w-[700px] object-cover" />
      </div>
      <div className="pl-[2rem] 2xl:mt-40 xl:mt-20 flex flex-col relative sm:right-0 lg:-right-[400px] xl:-right-[500px]  2xl:-right-[750px] items-center justify-start w-[50vw] mb-10 mt-10 ">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="font-inter text-lg font-bold text-blue-600">
              Finish your registration
            </h1>
          </div>
          {/* Logo */}
          <div className="flex items-center justify-center space-x-5 mt-5">
            <div className="text-[36px]">
              <BsFacebook />
            </div>
            {/* Divider */}
            <div className="flex items-center justify-between">
              <div className="w-[14px] h-[14px] rounded-full bg-blue-900" />
              <div className="w-[50px] h-[4px] bg-blue-900" />
              <div className="w-[14px] h-[14px] rounded-full bg-blue-900" />
            </div>
            <div className="text-[33px]">
              <BsGoogle />
            </div>
          </div>

          <div className="mt-5">
            <h1 className="font-inter text-[15px] font-bold text-blue-600">
              Why connect my Google account?
            </h1>
          </div>
          <div className="mt-2">
            <h1 className="font-inter text-sm text-center w-[400px]">
              Your contact and calendar data helps us schedule meetings and
              ensure that your matches are relevant (not matching you with the
              people you already know, for instance).
            </h1>
          </div>

          <div className="text-2xl text-slate-300 mt-5 mb-3">
            <RiLock2Line />
          </div>

          <div className="mt-2">
            <h1 className="font-inter text-sm text-center w-[400px]">
              We're serious about your privacy and will never share your private
              data with other users or third parties without your consent.
            </h1>
          </div>

          <div className="py-3 px-2 cursor-pointer rounded-lg mt-5 w-fit h-fit bg-white border-2 flex items-center justify-between">
            <div className="text-gray-500">
              <BsGoogle />
            </div>
            <p className="font-inter text-sm text-blue-500 ml-2 ">
              Finish sign up with Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishRegistration;
