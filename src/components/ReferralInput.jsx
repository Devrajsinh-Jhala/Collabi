import React from "react";

const ReferralInput = () => {
  var myopt = document.querySelectorAll("hi");
  console.log(myopt);
  for (var i = 0; i < myopt.length - 1; i++) {
    myopt[i].addEventListener("keyup", function () {
      this.nextElementSibling.focus();
    });
  }
  return (
    <div className="flex flex-col items-start mt-5 justify-center">
      <div className="flex justify-center items-center">
        <div className="flex mt-2 justify-between">
          <input id="ist" type="text" className="input-field1" maxLength={1} />
          <input id="sec" type="text" className="input-field1 " maxLength={1} />
          <input
            id="third"
            type="text"
            className="input-field1"
            maxLength={1}
          />
          <div className="w-[20px] mt-9 h-[0] border-t-[4px] border-black"></div>
          <input
            id="fourth"
            type="text"
            className="input-field1 "
            maxLength={1}
          />
          <input
            id="fifth"
            type="text"
            className="input-field1"
            maxLength={1}
          />
          <input
            id="sixth"
            type="text"
            className="input-field1"
            maxLength={1}
          />
        </div>
      </div>
    </div>
  );
};

export default ReferralInput;
