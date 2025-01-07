import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SigninValidation } from "./Validationschema";
const Formwithformik = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        middlename: "",
        lastname: "",
        dob: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={SigninValidation}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-2 w-[20%] ">
          <label htmlFor="firstname">Firstname</label>
          <Field
            className="border-2 border-black "
            type="text"
            name="firstname"
            id="firstname"
          />
          <ErrorMessage name="firstname" component="div" />
          <label htmlFor="middlename">Middlename</label>
          <Field
            className="border-2 border-black "
            type="text"
            name="middlename"
            id="middlename"
          />
          <ErrorMessage name="middlename" component="div" />{" "}
          <label htmlFor="lastname">Lastname</label>
          <Field
            className="border-2 border-black "
            type="text"
            name="lastname"
            id="lastname"
          />
          <ErrorMessage name="lastname" component="div" />
          <label htmlFor="dob">Date of Birth</label>
          <Field
            className="border-2 border-black "
            type="date"
            name="dob"
            id="dob"
          />
          <ErrorMessage name="dob" component="div" />
          <label htmlFor="username">Username</label>
          <Field
            className="border-2 border-black "
            type="text"
            name="username"
            id="username"
          />
          <ErrorMessage name="username" component="div" />
          <label htmlFor="email">Email</label>{" "}
          <Field
            className="border-2 border-black "
            type="email"
            name="email"
            id="email"
          />
          <ErrorMessage name="email" component="div" />
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
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Formwithformik;
