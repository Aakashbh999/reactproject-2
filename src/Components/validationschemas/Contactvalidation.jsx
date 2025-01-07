import * as Yup from "yup";
const emailregex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
export const Contactvalidation = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(30, "must be less then 30 characters")
    .required("please enter the username"),
  email: Yup.string()
    .matches(emailregex, "email is not valid")
    .required("please enter the email"),
  message: Yup.string().required("please provide the message "),
});
