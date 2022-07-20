import React from "react";

import Logo from "../assets/Metadev Logo Image.png";
import ReferralButton from "./ReferralButton";

const ReferralPage = () => {
  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0 ">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[500px] bg-[#f1f5f9] xl:w-[600px] 2xl:w-[900px] object-cover" />
      </div>
      <div className="flex flex-col relative sm:right-0 lg:-right-[500px] xl:-right-[600px] 2xl:-right-[1000px] items-center mt-20 ">
        <div className="right flex flex-col 2xl:mt-20 items-center justify-center m-4 sm:ml-[70px]">
          <div>
            <img className="w-36 mb-5" src={Logo} alt={Logo} />
            <div className="flex flex-col items-start space-y-8 pr-10 justify-start font-inter">
              <div className="leading-[1.5rem] text-[15px] overflow-hidden md:w-[500px]">
                Hey, MetaDev is an exclusive invitation only web3 professional
                networking platform built for Developers.
              </div>
              <div className="leading-[1.5rem] text-[15px] overflow-hidden  md:w-[500px]">
                We're still opening up but anyone can join with an invite from
                an existing user! To join, an existing user has to send an
                invite and also give you access to join MetaDev. Sign up to see
                if you have collaborators on MetaDev who can let you in.
              </div>
              <div className="leading-[1.5rem] text-[15px]">
                We can't wait for you to join!
              </div>
            </div>

            <input
              className=" w-full overflow-hidden sm:w-[200px] leading-[1.3rem] text-[14px] mt-5 tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[15px] h-[43px] "
              type="email"
              name="email"
              placeholder="Invite Code"
            />
            <ReferralButton text={"Unlock Access"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
