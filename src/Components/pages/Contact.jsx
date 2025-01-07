import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Contactvalidation } from "../validationschemas/Contactvalidation";
import { toast } from "react-toastify";

const Contact = () => {
  const fetchData = async (values) => {
    const URL = "https://api.durlavparajuli.com.np/api/form/contact";
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
      <div className="c bg-black w-full h-[100vh] m-0">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Contactvalidation}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            fetchData(values);
            setTimeout(() => {
              // alert(JSON.stringify(values));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full p-7 text-xl flex flex-col gap-10  text-white py-10">
              <div className="w-full sm:w-[40%] flex flex-col gap-2 ">
                <label className=" text-2xl">Username</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="text-black p-1 rounded-sm"
                />
                <ErrorMessage name="username" component="div" />
              </div>
              <div className="w-full sm:w-[40%]  flex flex-col gap-2 ">
                <label className=" text-2xl">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="text-black p-1 rounded-sm"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="w-full sm:w-[40%] flex flex-col gap-2 ">
                <label className=" text-2xl">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Enter your message here...."
                  className="text-black p-1 rounded-sm"
                />
                <ErrorMessage name="message" component="div" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white rounded-md p-2 w-[150px] "
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
