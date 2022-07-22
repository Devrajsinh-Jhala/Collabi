import React from "react";
import Navbar from "../components/Navbar";
import landing from "../assets/landing page illustraion-01 (1).png";

const Test = () => {
  return (
    <div>
      <Navbar />

      <img className=" h-[85vh] w-full object-cover  " src={landing} alt="" />
    </div>
  );
};

export default Test;
