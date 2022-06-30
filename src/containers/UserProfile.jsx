import React, { useState } from "react";
import Image from "../assets/Background Image 1.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Link } from "react-router-dom";
import Button from "../components/Button";
import Socials from "../components/Socials";
import AuthenticationButton from "../components/AuthenticationButton";
import UserButton from "../components/UserButton";

const UserProfile = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left">
        <img
          className=" min-h-[100%] hidden sm:flex lg:w-[500px] object-cover"
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
          </div>

          <div className="mt-2">
            <Link to="/goals">
              <UserButton text={"Next"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
