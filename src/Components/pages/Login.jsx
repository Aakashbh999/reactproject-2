import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import loginphoto from "../../photos/loginphoto.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
// import { MyAuthProvider } from "../../content/AuthProvider";
import { MyProvider } from "../../content/Auth2";
import { postPublicRequest } from "../../utils/queries";

const Login = () => {
  // const { token, isLoggedIn } = useContext(MyAuthProvider);
  const { setToken } = useContext(MyProvider);
  const [clickedButton, setClickedButton] = useState(null);
  const navigate = useNavigate();

  const hello = async (values) => {
    const data = await postPublicRequest("api/auth/login", values);
    console.log(data);
    if (data.status === 200) {
      console.log(data.data.token, "ok");

      localStorage.setItem("token", data.data.token);
      setToken(data.data.token);
      toast.success(data.data.msg);
    }
  };
  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  return (
    <>
      <div className="c w-full h-[100vh] bg-black text-white flex justify-center items-center">
        <div className="a w-full lg:w-[60%] bg-[rgb(18,4,36)] p-5 flex justify-evenly items-center gap-3 py-20 rounded-3xl">
          <div className="p w-auto ">
            <div className="i  w-[130px] h-[130px] sm:w-[230px] sm:h-[230px]  flex justify-center items-center">
              <img
                src={loginphoto}
                alt="#"
                className="object-cover w-[100%] h-[100%] rounded-full"
              />
            </div>
          </div>
          <div className="w-[50%] ">
            <h2 className="text-3xl mb-10">Login Here</h2>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                if (clickedButton === "login") {
                  hello(values);
                  setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                } else if (clickedButton === "register") {
                  console.log("Register button clicked");
                  navigate("/registration");
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-3">
                  <div className="e w-full   flex flex-col gap-2  ">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      placeholder="example@gmail,com"
                      className="rounded-md p-1 text-black text-xl"
                      name="email"
                    />
                  </div>
                  <div className="e w-full   flex flex-col gap-2 ">
                    <label htmlFor="email">Password</label>
                    <Field
                      type="text "
                      placeholder="example@gmail,com"
                      className="rounded-md p-1 text-black text-xl"
                      name="password"
                    />
                  </div>

                  <div className="b flex flex-wrap gap-3 ">
                    <button
                      type="submit"
                      onClick={() => handleButtonClick("login")}
                      disabled={isSubmitting}
                      className="p-2 bg-blue-700 rounded-md"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleButtonClick("register")}
                      className="p-2 bg-green-700 rounded-md"
                    >
                      Register Now
                    </button>
                    <button className="p-2 bg-red-700 rounded-md">
                      Forgot Password
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
