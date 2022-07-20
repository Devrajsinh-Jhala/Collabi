import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import Socials from "../components/Socials";

const UserProfile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/goals");
  };
  const toastMessage = () => {
    return (
      <div className="flex w-full items-center justify-between">
        <div className="mr-3 text-white">
          <BsFillCheckCircleFill />
        </div>
        <p className="text-white text-sm font-inter">Successfully Verified</p>
      </div>
    );
  };
  useEffect(() => {
    toast(toastMessage, {
      position: "bottom-center",
      duration: 1500,
      style: {
        width: "fit-content",
        borderRadius: "9999px",
        fontFamily: "Inter",
        backgroundColor: "black",
      },
    });
  }, []);

  const [value, setValue] = useState("");
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[500px] bg-[#f1f5f9] xl:w-[600px] 2xl:w-[900px] object-cover" />
      </div>
      <div className="flex relative -right-16 sm:right-0 lg:-right-[500px] xl:-right-[600px] 2xl:-right-[1000px] flex-col items-center mt-24 ">
        <div className="right 2xl:mt-20 flex flex-col items-start justify-center m-4 sm:ml-[70px]">
          <div className="flex items-start justify-between ">
            <div className="circle">
              <span className="m-auto">Profile</span>
            </div>
            <div className="flex flex-col -mt-2 items-start justify-center ">
              <div className="flex flex-col items-start justify-start">
                <p className="font-inter  ml-6 font-semibold text-black text-[13px] mb-1">
                  Name
                </p>
                <input
                  className=" w-full ml-6 sm:w-[263px] tracking-[-0.015em] leading-[1.3rem] font-inter pl-[15px] border border-gray-400 rounded-lg text-[14px] focus:outline-none py-[15px] h-[41px] "
                  type="email"
                  name="email"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <p className="font-inter mt-4 ml-6 font-semibold text-black text-[13px] mb-1">
                  Phone Number
                </p>
                <div className="ml-6">
                  <PhoneInput
                    country="in"
                    value={value}
                    onChange={() => setValue(value)}
                    countryCodeEditable={false}
                    placeholder="99999 99999"
                    inputStyle={{
                      width: "265px",
                      height: "42px",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className=" font-inter mt-8 font-semibold text-black text-[13px] mb-1">
            Your Bio
          </p>
          <textarea
            className="border tracking-[-0.015em] leading-[1.3rem] text-[14px] focus:outline-none focus:border-blue-500 py-2 px-2 border-slate-400 rounded-md resize-none font-inter "
            name=""
            id=""
            placeholder="Write something about yourself..."
            cols="48"
            rows="3"
          ></textarea>

          <div className="mt-10 mb-5">
            <Socials />
            <button
              onClick={handleClick}
              className="mt-5 mb-5 font-inter w-[80px] hover:bg-slate-700 bg-black text-white rounded-full  text-sm p-[0.6rem] font-semibold cursor-pointer px-[1.5rem]"
            >
              <div className="font-inter">Next</div>
            </button>
          </div>

          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
