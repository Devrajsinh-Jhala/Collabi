import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";

const Toast = () => {
  return (
    <div className="fixed bottom-0 right-1/2 translate-x-1/2 z-10 text-center">
      <div
        className={`bg-green-600 text-white p-3.5 mb-3 rounded-3xl text-sm font-semibold animate-slide-up`}
      >
        <AiOutlineInfoCircle
          style={{
            display: "inline",
            fontSize: "18px",
            marginRight: "6px",
          }}
        />
        Hello
      </div>
    </div>
  );
};

export default Toast;
