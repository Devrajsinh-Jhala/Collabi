import React, { useState } from "react";
import Image from "../assets/Background Image 1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Link } from "react-router-dom";
import Button from "../components/Button";

const UserProfile = () => {
  const [value, setValue] = useState("");
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
            <div className="flex flex-col -mt-2 items-start justify-center ">
              <div className="flex flex-col items-start justify-start">
                <p className="font-inter  ml-6 font-semibold text-black text-[13px] mb-1">
                  Name
                </p>
                <input
                  className=" w-full ml-6 sm:w-[350px] tracking-tight font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[46px] "
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
                    inputStyle={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className=" font-inter mt-8 font-semibold text-black text-[13px] mb-1">
            Your Bio
          </p>
          <textarea
            className="border focus:outline-none focus:border-blue-500 py-2 px-2 border-slate-400 rounded-md resize-none font-inter leading-6"
            name=""
            id=""
            placeholder="Write something about yourself..."
            cols="42"
            rows="3"
          ></textarea>

          <div className="mt-4">
            <Link to={"/goals"}>
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;