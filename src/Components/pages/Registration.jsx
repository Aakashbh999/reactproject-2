import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Registrationvalidation } from "../validationschemas/Registrationvalidation";
import { toast } from "react-toastify";

const Registration = () => {
  const fetchData = async (values) => {
    const URL = "https://api.durlavparajuli.com.np/api/auth/register";

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        toast.success(data.msg);
      } else {
        // console.log(data.msg);
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            fetchData(values);
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={Registrationvalidation}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-2 w-[20%] ">
            <label htmlFor="username">Username</label>
            <Field
              className="border-2 border-black "
              type="text"
              name="username"
              id="username"
            />
            <ErrorMessage name="username" component="div" />

            <label htmlFor="email">Email</label>
            <Field
              className="border-2 border-black "
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="phone">Phone</label>
            <Field
              className="border-2 border-black "
              type="text"
              name="phone"
              id="phone"
            />
            <ErrorMessage name="phone" component="div" />

            <label htmlFor="password">Password</label>
            <Field
              className="border-2 border-black "
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage name="password" component="div" />

            <label htmlFor="cpassword">Confirm Password</label>
            <Field
              className="border-2 border-black "
              type="password"
              name="cpassword"
              id="cpassword"
            />
            <ErrorMessage name="cpassword" component="div" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 rounded-lg p-2"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Registration;
