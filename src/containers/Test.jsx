import React from "react";
import Navbar from "../components/Navbar";
import landing from "../assets/landing page illustraion-01 (1).png";

const Test = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-10 mb-10">
        <img className=" h-[85vh] w-full object-cover  " src={landing} alt="" />
      </div>
    </div>
  );
};

export default Test;
