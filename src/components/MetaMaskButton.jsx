import React from "react";
import Metamask from "../assets/Metamask-icon.png";

const MetaMaskButton = () => {
  return (
    <button className="flex w-full items-center justify-center sm:w-[194px] h-[38px] bg-[#f1f1f1] text-slate-900 font-semibold text-base p-2 rounded-md">
      <img className="w-5" src={Metamask} alt={Metamask} />
      <span className="ml-2">Metamask</span>
    </button>
  );
};

export default MetaMaskButton;
