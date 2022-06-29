import React, { useState } from "react";
import Image from "../assets/Background Image 1.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { Link } from "react-router-dom";
import Button from "../components/Button";

const UserProfile = () => {
  const [value, setValue] = useState();
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
        <div className="right flex flex-col items-start justify-center m-4 sm:ml-[70px]">
          <div className="flex items-start justify-between ">
            <div className="circle">
              <span className="m-auto">Profile</span>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-inter mt-2 ml-16 font-semibold text-black text-[16px] mb-1">
                Name
              </p>
              <input
                className=" w-full ml-16 sm:w-[350px] tracking-tight font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[46px] "
                type="email"
                name="email"
                placeholder="Enter your Name"
              />
            </div>
          </div>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          <p className="font-inter mt-10 font-semibold text-black text-[16px] mb-1">
            Your Bio
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between ">
            <div>
              <p className="font-inter mt-10 font-semibold text-black text-[16px] mb-1">
                Location
              </p>
              <input
                className=" w-full sm:w-[250px] tracking-tight font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[46px] "
                type="email"
                name="email"
                placeholder="Enter your Name"
              />
            </div>
            <div className="ml-6">
              <p className="font-inter mt-10 font-semibold text-black text-[16px] mb-1">
                Time Zone
              </p>
              <input
                className=" w-full sm:w-[250px] tracking-tight font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[46px] "
                type="email"
                name="email"
                placeholder="Enter your Location"
              />
            </div>
          </div>
          <div className="mt-4">
            <Link to={"/social"}>
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
