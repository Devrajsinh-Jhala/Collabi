import React from "react";

const OtpInput = ({ text, subText, boldText }) => {
  var myopt = document.querySelectorAll("hi");
  console.log(myopt);
  for (var i = 0; i < myopt.length - 1; i++) {
    myopt[i].addEventListener("keyup", function () {
      this.nextElementSibling.focus();
    });
  }
  return (
    <div className="flex flex-col items-start mt-5 justify-center">
      <div className="text-[16px] font-inter">{text} </div>
      <div className="text-[#7a7a7a] font-inter text-[13px] leading-[24px] font-[400] mb-[1rem]">
        {subText} <span className="text-[13px] font-bold">{boldText}</span>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-between">
          <input
            id="ist"
            type="text"
            className="input-field hi"
            maxLength={1}
          />
          <input
            id="sec"
            type="text"
            className="input-field hi"
            maxLength={1}
          />
          <input id="third" type="text" className="input-field" maxLength={1} />
          <div className="w-[20px] mt-9 h-[0] border-t-[6px] border-black"></div>
          <input
            id="fourth"
            type="text"
            className="input-field "
            maxLength={1}
          />
          <input id="fifth" type="text" className="input-field" maxLength={1} />
          <input id="sixth" type="text" className="input-field" maxLength={1} />
        </div>
      </div>
    </div>
  );
};

export default OtpInput;
