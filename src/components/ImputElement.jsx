import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { emailSchema } from "../schemas/EmailValidation";

const InputElement = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
  });

  return (
    <div className="flex flex-col items-center justify-center mt-[35px] mb-[15px]">
      <div>
        <p className="font-inter  text-black text-[18px] mb-8 ">
          Sign Up and Explore the Metaverse for Developers
        </p>
        <p className="font-inter font-semibold text-black text-[13px] mb-2 ">
          Email Address
        </p>
        <input
          className=" w-full sm:w-[400px] leading-[1.3rem] tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg text-[14px]  focus:outline-none  py-[13px] h-[43px] "
          type="email"
          name="email"
          placeholder="example@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {console.log(formik.errors)}
        {formik.errors.email && (
          <p className="text-red-600 text-sm font-semibold font-inter mt-1">
            {formik.errors.email}
          </p>
        )}
        <p className="font-inter font-semibold text-slate-600 text-[13px] mt-4 mb-4 ">
          Have a MetaDev Account? Please{" "}
          <Link to={"/sign-in"}>
            <span className="text-pink-500 underline cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>

        {console.warn(formik.values.email)}
        <Link to={"/otp-verification"}>
          <button
            disabled={
              formik.errors.email || formik.values.email === "" ? true : false
            }
            className={` w-full font-inter sm:w-[400px] h-[50px] bg-black rounded-full font-semibold text-[18px] hover:bg-gray-800 text-white`}
          >
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InputElement;
