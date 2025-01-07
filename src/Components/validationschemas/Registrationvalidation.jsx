import * as Yup from "yup";
const emailregex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}$/;
export const Registrationvalidation = Yup.object({
  email: Yup.string()
    .matches(emailregex, "email is not valid")
    .required("please enter the email"),
  username: Yup.string()
    .min(3, "must be at least 3 characters")
    .max(20, "must be less then 20 characters")
    .required("please enter the username"),
  phone: Yup.string().min(10).max(10).required("please enter the pone number"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "password must contain 8 characters,one uppercase letter, one lowercase letter, one digit and one special character (e.g., @, #, $, etc.)  "
    )
    .max(20, "password must contain less then 20 characters")
    .required("please enter the password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "password does not matched")
    .required("please conform the password"),
});
