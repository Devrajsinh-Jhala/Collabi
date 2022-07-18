// eslint-disable-next-line no-restricted-globals
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const OtpInput = ({ text, subText, boldText }) => {
  const navigate = useNavigate();
  const spinnerText = () => {
    return (
      <div className="flex items-center justify-start">
        <Oval
          ariaLabel="loading-indicator"
          height={20}
          width={20}
          strokeWidth={5}
          color="red"
          secondaryColor="yellow"
        />
        <div className="ml-4 font-inter text-white text-16px ">
          Verifying...
        </div>
      </div>
    );
  };

  useEffect(() => {
    var myopt = document.querySelectorAll(".input-field");
    console.log(myopt);
    for (var i = 0; i < myopt.length - 1; i++) {
      myopt[i].addEventListener("keyup", function () {
        this.nextElementSibling.focus();
      });
    }
  }, []);
  function CheckOTP() {
    console.log("next");
    toast(spinnerText, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        width: "200px",
        borderRadius: "10%",
        fontFamily: "Inter",
        backgroundColor: "Green",
      },
    });
    setTimeout(() => {
      navigate("/profile");
    }, 2500);
  }
  // console.log(i, myopt.length - 1);
  // if (i === myopt.length - 1) {
  //   console.log("enter");
  //   myopt[myopt.length - 1].addEventListener("enter", function () {
  //     console.log("enter");
  //   });
  // }

  return (
    <>
      <div className="flex flex-col items-start mt-5 justify-center">
        <div className="text-[16px] font-inter">{text} </div>
        <div className="text-[#7a7a7a] font-inter text-[13px] leading-[24px] font-[400] mb-[1rem]">
          {subText} <span className="text-[13px] font-bold">{boldText}</span>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-between">
            <form>
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
              <input
                id="third"
                type="text"
                className="input-field"
                maxLength={1}
              />

              <input
                id="fourth"
                type="text"
                className="input-field "
                maxLength={1}
              />
              <input
                id="fifth"
                type="text"
                className="input-field"
                maxLength={1}
              />
              <input
                id="sixth"
                type="text"
                className="input-field"
                maxLength={1}
                onKeyPress={() => CheckOTP()}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpInput;
