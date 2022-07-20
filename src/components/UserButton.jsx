import React from "react";

const UserButton = ({ text }) => {
  return (
    <div className="mt-1 mb-5 font-inter hover:bg-slate-700 bg-black hidden sm:block text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]">
      {text}
    </div>
  );
};

export default UserButton;
