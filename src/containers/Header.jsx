import React from "react";

import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import Companies from "./Companies";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className=" z-0 h-full flex justify-center relative font-inter ">
        <div className="flex flex-col gap-12 items-center p-[10px] mt-[1rem]">
          <div className="flex  flex-col items-center gap-2 md:gap-4 lg:gap-6">
            <div className=" flex flex-wrap sm:w-[70%]  sm:justify-center ">
              <div className="overflow-hidden mt-16">
                <h1 className=" z-0 w-full max-w-[1000px] text-center big-text mb-[1.5rem] sm:mb-[0]  ">
                  <span className="sm:p-2 px-4">
                    A professional networking platform built for
                  </span>
                  <span className=" colored-text">developers</span>
                </h1>
              </div>
            </div>
            <div className="sm:mt-4  sm:w-[60%] sub-head overflow-hidden mb-[2rem] sm:mb-[0]">
              <h1 className="text-center leading-[23px] sm:leading-[30px] tracking-[-0.014em] text-16px sm:text-[18px]">
                {" "}
                This is where people who code connect, share their knowledge,
                collaborate with like minded individuals and find new
                opportunities
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Tagline />
      <Companies />
      <Footer />
    </>
  );
};

export default Header;
