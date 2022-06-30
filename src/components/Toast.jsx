import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { Oval } from "react-loader-spinner";

const Toast = () => {
  const spinnerText = () => {
    return (
      <div className="flex items-center justify-start">
        <Oval
          ariaLabel="loading-indicator"
          height={20}
          width={20}
          strokeWidth={5}
          color="red"
          secondaryColor="green"
        />
        <div className="ml-4 font-inter">Verifying...</div>
      </div>
    );
  };
  return (
    <div className="fixed bottom-0 right-1/2 translate-x-1/2 z-10 text-center">
      <div
        className={`bg-green-600 text-white p-3.5 mb-3 rounded-3xl text-sm font-semibold animate-slide-up`}
      >
        {spinnerText}
      </div>
    </div>
  );
};

export default Toast;
