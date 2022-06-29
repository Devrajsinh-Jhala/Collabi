import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/Background Image 1.png";
import Button from "../components/Button";

const SocialAccounts = () => {
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
        <div className="right flex flex-col items-center justify-center m-4 sm:ml-[70px]">
          <Link to={"/goals"}>
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialAccounts;
