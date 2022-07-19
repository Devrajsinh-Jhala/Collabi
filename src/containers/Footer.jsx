import React from "react";
import navImage from "../assets/Metadev Logo Image.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex mt-10 md:mt-24 flex-col items-start md:flex-row px-6 py-5 font-inter ">
      <div className="px-4 py-5 w-full flex flex-col md:w-[36%] ">
        <div className="flex flex-col justify-start w-full">
          <img
            className=" flex flex-col -ml-2 items-center justify-start w-[158px]"
            src={navImage}
            alt={navImage}
          />
        </div>
        <h3 className="py-2 font-inter text-base">Metaverse for Developers</h3>

        <p className=" py-4 text-[13px]">
          Copyright © 2022 | Made with ♡ for Developers | All rights reserved
        </p>
      </div>
      <div className="px-4 py-2 w-full justify-start flex flex-col md:w-[36%]">
        <p className=" font-semibold">Company</p>

        <Link to="/aboutus">
          <p className="py-2 text-[13px] text-[#6b6f76]">About us</p>
        </Link>
        <p className="py-2 text-[13px] text-[#6b6f76]">Blog</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Request Feature</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Careers</p>
      </div>
      <div className="px-4 md:-mt-4 py-5 w-full md:w-[36%]">
        <p className="font-semibold">Social</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">Instagram</p>
        <p className="py-2 text-[13px] text-[#6b6f76]">LinkedIn</p>
      </div>
    </div>
  );
};

export default Footer;
