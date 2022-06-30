import React from "react";
import Image from "../assets/Background Image 1.png";
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
          secondaryColor="green"
        />
        <div className="ml-4 font-inter">Verfying...</div>
      </div>
    );
  };

  const handleClick = () => {
    toast(spinnerText, {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/profile");
  };

  return (
    <>
      <div className="flex h-[100%] xl:h-[100vh] ">
        <div className="left  ">
          <img
            className=" h-[100%] hidden sm:flex lg:w-[500px] object-cover"
            src={Image}
            alt={Image}
          />
        </div>
        <div className="flex flex-col items-center mt-24 ">
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
                  Temporary button
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
