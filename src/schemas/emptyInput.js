import * as yup from "yup";
import { AiFillMinusCircle } from "react-icons/ai";

const emptyErrorMessage = (
  <div className="flex items-center justify-start ">
    <AiFillMinusCircle />
    <p className="font-inter ml-1">Please enter an email address</p>
  </div>
);

export const emptyInput = yup.object().shape({
  name: yup.string().required(emptyErrorMessage),
  bio: yup.string().required(emptyErrorMessage),
});
