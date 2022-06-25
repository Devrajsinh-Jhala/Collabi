import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#2536eb] hover:opacity-80 rounded-full text-white font-inter text-[14px] py-2 px-4 md:ml-4 hover:bg-indogo-400 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
