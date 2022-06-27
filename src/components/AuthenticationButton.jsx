import React from "react";
import { Link } from "react-router-dom";

const AuthenticationButton = () => {
  return (
    <Link to={"/otp-verification"}>
      <button className=" w-full sm:w-[400px] h-[50px] bg-black rounded-full font-semibold text-[18px] hover:bg-gray-800 text-white">
        Create Account
      </button>
    </Link>
  );
};

export default AuthenticationButton;
