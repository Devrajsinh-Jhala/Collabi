import * as yup from "yup";
import { AiFillMinusCircle } from "react-icons/ai";

const validationErrorMessage = (
  <div className="flex items-center justify-start ">
    <AiFillMinusCircle />
    <p className="font-inter ml-1">Please enter a valid email address</p>
  </div>
);
const emptyErrorMessage = (
  <div className="flex items-center justify-start ">
    <AiFillMinusCircle />
    <p className="font-inter ml-1">Please enter an email address</p>
  </div>
);

export const emailSchema = yup.object().shape({
  email: yup.string().email(validationErrorMessage).required(emptyErrorMessage),
});
