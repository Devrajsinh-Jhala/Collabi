import React from "react";

const SignUpButton = ({ icon, name }) => {
  return (
    <button className="flex font-inter items-center justify-center w-full sm:w-[194px] h-[38px] bg-[#f1f1f1] hover:text-slate-50 hover:bg-slate-500 text-slate-900 font-semibold text-base p-2 rounded-md">
      {icon}
      <span className="ml-2">{name}</span>
    </button>
  );
};

export default SignUpButton;
