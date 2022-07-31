import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useNavigate } from "react-router-dom";
import ShowProfilePhoto from "../components/ShowProfilePhoto";
import { emptyInput } from "../schemas/emptyInput";

import Socials from "../components/Socials";

const UserProfile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/goals");
  };

  const [showprofilephoto, setShowprofilephoto] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState(
    localStorage.getItem("profileImgUrl")
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (showprofilephoto) {
      body[0].style.overflow = "hidden";
      body[0].style.position = "fixed";
      body[0].style.width = "100%";
    } else {
      body[0].style.overflow = "auto";
      body[0].style.position = "relative";
    }
  }, [showprofilephoto]);

  const [value, setValue] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
    },
    validationSchema: emptyInput,
  });

  return (
    <div className="flex h-[100%] xl:h-[100vh] ">
      <div className="left fixed top-0 left-0 bottom-0">
        <div className=" min-h-[100%] hidden sm:flex lg:w-[500px] bg-[#f1f5f9] xl:w-[600px] 2xl:w-[900px] object-cover" />
      </div>
      <div className="flex relative -right-16 sm:right-0 lg:-right-[500px] xl:-right-[600px] 2xl:-right-[1000px] flex-col items-center mt-24 ">
        <div className="right 2xl:mt-20 flex flex-col items-start justify-center m-4 sm:ml-[70px]">
          <div className="flex items-start justify-between ">
            <span className="relative inline-flex flex-shrink-0 align-middle">
              {profilePhoto === null ? (
                <div className="bg-[#c0f2ef] text-[#25b2aa] h-[4.6875rem] w-[4.6875rem] text-[2.5rem] font-bold mr-5 cursor-pointer flex overflow-hidden relative items-center flex-shrink-[1] rounded-full justify-center">
                  S
                </div>
              ) : (
                <div
                  className="h-[4.6875rem] w-[4.6875rem] mr-5 cursor-pointer rounded-full bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url("${profilePhoto}")`,
                  }}
                />
              )}
              <span className="absolute right_circle h-[50px] w-[50px] flex py-0 px-[6px] z-10 flex-wrap text-[0.75rem]  min-w-[20px] items-center font-medium content-center rounded-[10px] flex-row justify-center -top-4 -right-4">
                <img
                  src="https://sowmiya-home-page.herokuapp.com/static/media/avatar-edit.1d269375.png"
                  className="w-[20px] h-[20px] ml-[-35px] cursor-pointer align-middle border-none"
                  alt=""
                  onClick={() => setShowprofilephoto(true)}
                />
              </span>
            </span>
            <div className="flex flex-col -mt-2 items-start justify-center ">
              <div className="flex flex-col items-start justify-start">
                <p className="font-inter  ml-6 font-semibold text-black text-[13px] mb-1">
                  Name
                </p>
                <input
                  className=" w-full ml-6 sm:w-[263px] tracking-[-0.015em] leading-[1.3rem] font-inter pl-[15px] border border-gray-400 rounded-lg text-[14px] focus:outline-none py-[15px] h-[41px] "
                  type="text"
                  name="name"
                  value={formik.values.name}
                  placeholder="Enter your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && (
                  <p className="text-red-600 text-sm font-semibold ml-5 font-inter mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div>
                <p className="font-inter mt-4 ml-6 font-semibold text-black text-[13px] mb-1">
                  Phone Number
                </p>
                <div className="ml-6">
                  <PhoneInput
                    country="in"
                    value={value}
                    onChange={() => setValue(value)}
                    countryCodeEditable={false}
                    placeholder="99999 99999"
                    inputStyle={{
                      width: "265px",
                      height: "42px",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className=" font-inter mt-8 font-semibold text-black text-[13px] mb-1">
            Your Bio
          </p>
          <textarea
            className="border tracking-[-0.015em] leading-[1.3rem] text-[14px] focus:outline-none focus:border-blue-500 py-2 px-2 border-slate-400 rounded-md resize-none font-inter "
            name="bio"
            id="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Write something about yourself..."
            cols="48"
            rows="3"
          ></textarea>
          {formik.errors.bio && (
            <p className="text-red-600 text-sm font-semibold font-inter mt-1">
              {formik.errors.bio}
            </p>
          )}

          {console.warn(formik.errors.name)}
          <div className="mt-10 mb-5">
            <Socials />
            <button
              disabled={
                formik.errors.name ||
                formik.values.name === "" ||
                formik.errors.bio ||
                formik.values.bio === ""
                  ? true
                  : false
              }
              onClick={handleClick}
              className="mt-5 mb-5 font-inter w-[80px] hover:bg-slate-700 bg-black text-white rounded-full  text-sm p-[0.6rem] font-semibold cursor-pointer px-[1.5rem]"
            >
              <div className="font-inter">Next</div>
            </button>
          </div>
        </div>
        <ShowProfilePhoto
          showprofilephoto={showprofilephoto}
          setShowprofilephoto={setShowprofilephoto}
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
        />
      </div>
    </div>
  );
};

export default UserProfile;
