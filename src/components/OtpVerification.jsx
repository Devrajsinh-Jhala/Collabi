import React from "react";
import Logo from "../assets/Metadev Logo Image.png";
import OtpInput from "./OtpInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
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

  const handleClick = () => {
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

    navigate("/profile");
  };

  return (
    <>
      <div className="flex h-[100%] xl:h-[100vh] ">
        <div className="left fixed top-0 left-0 bottom-0 ">
          <div className=" min-h-[100%] hidden sm:flex lg:w-[500px] bg-[#f1f5f9] xl:w-[600px] 2xl:w-[900px] object-cover" />
        </div>
        <div className="flex flex-col relative sm:right-0 lg:-right-[500px] xl:-right-[600px] 2xl:-right-[1000px] items-center mt-24 ">
          <div className="right flex flex-col items-center justify-center m-4 sm:ml-[70px]">
            <div>
              <img className="w-36" src={Logo} alt={Logo} />
              <OtpInput
                text={"Check your email for code"}
                subText={"We have sent a 6 - character code to"}
                boldText={"tempemail@collabi.com"}
              />
              <p className="text-slate-400 mt-3 mb-3 font-inter text-[14px]">
                Or click on the button in that email
              </p>

              <div className="flex flex-row items-center justify-start">
                <button className="pt-3 font-semibold pr-2 font-inter rounded-full text-slate-500 hover:text-slate-900 bg-[white]">
                  Use a different Email
                </button>

                <button
                  onClick={handleClick}
                  className="pt-3 font-semibold pr-2 font-inter rounded-full text-slate-500 hover:text-slate-900 bg-[white]"
                >
                  Verify OTP
                </button>
                <ToastContainer
                  position="bottom-center"
                  autoClose={1500}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
