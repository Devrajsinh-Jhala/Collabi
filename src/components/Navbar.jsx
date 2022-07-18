import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import navImage from "../assets/Metadev Logo Image.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [{ name: "About Us", links: "/aboutus" }];

  let [open, setOpen] = useState(false);
  return (
    <div className="z-10 shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <img
            className=" px-8 md:px-0 w-[150px] md:w-[180px] object-cover"
            src={navImage}
            alt={navImage}
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl -mt-3 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full z-[-1] md:pl-0  md:w-auto md:items-center transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          } `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-7 font-inter"
            >
              <Link
                className="text-gray-800 hover:text-[#2536eb] font-semibold duration-500"
                to={link.links}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex  md:ml-4 flex-col items-center md:flex-row gap-5 md:gap-0">
            <Link to={"/sign-in"}>
              <Button>Login</Button>
            </Link>
            <Link to={"/referral"}>
              <Button>Have an invite ?</Button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
