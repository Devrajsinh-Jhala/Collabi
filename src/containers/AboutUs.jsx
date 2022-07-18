import React from "react";
import AboutUsBigCards from "../components/AboutUsBigCards";
import AboutUsCard from "../components/AboutUsCard";
import GradientCards from "../components/GradientCards";

const AboutUs = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#f8f8f8] h-[100%] flex flex-col items-center justify-start ">
      <div className="w-[730px] h-fit mt-40">
        <div className="flex space-x-3 items-center justify-start">
          <div className="text-[56px] font-inter tracking-[-0.15625rem] font-semibold text-[#6b6f76]">
            Hey, I'm
          </div>
          <div className="text-[56px] font-inter text-transparent bg-clip-text bg-gradient-to-r from-[#6699FF] to-[#FF3366] tracking-[-0.15625rem] font-semibold ">
            Sally
          </div>
        </div>
        <p className="mt-5 font-inter">
          I'm a third-year undergrad studying computer science and cognitive
          science. I grew up in New Jersey, currently living in NYC. My passions
          include web3, design, and boba.
        </p>
        <p className="mt-5 font-inter">
          Currently, I'm running a student-led class at my college, where I
          teach UI/UX design to fellow students. This summer I'll be working as
          a front-end developer at Cardy.{" "}
        </p>
        <p className="mt-5 font-inter">It's nice to meet you! 👋🏼</p>
        <div className="text-[36px] mt-10 font-inter tracking-[-1px]  font-semibold text-[#6b6f76]">
          what else I am working on ?
        </div>
        <div className="mt-10 grid grid-cols-2 ">
          <div className="col-span-1">
            <GradientCards />
          </div>
          <div className="col-span-1">
            <AboutUsCard />
          </div>
          <div className="col-span-1">
            <AboutUsCard />
          </div>
          <div className="col-span-1">
            <GradientCards />
          </div>
        </div>
      </div>
      <AboutUsBigCards
        subHeading={"Opinion"}
        heading={"Will Web3.0 Change the Way You Onteract With the Internet?"}
        description={
          "A blog discussing Web3.0, its impact, and how it will change the natural way we use the internet."
        }
        authorName={"Sally Perez"}
        date={"2022-04-05"}
      />
      <div className="-mt-12">
        <AboutUsBigCards
          subHeading={"Deep Dive"}
          heading={"Desigining for Web3: From the View to the Machine "}
          description={
            'How exactly do you make "Visual Web3"? A blog about how to work with a new set of backend, frontend and design practices'
          }
          authorName={"Sally Perez"}
          date={"2022-04-12"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
