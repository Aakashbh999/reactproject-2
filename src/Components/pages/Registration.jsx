import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Registrationvalidation } from "../validationschemas/Registrationvalidation";
import { postPublicRequest } from "../../utils/queries";

const Registration = () => {
  const hello = async (values) => {
    const data = await postPublicRequest("/api/auth/register", values);
    console.log(data);
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
            hello(values);
            setSubmitting(false);
          }, 200);
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
