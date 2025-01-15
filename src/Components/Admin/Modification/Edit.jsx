import React, { useContext, useEffect, useState } from "react";
import { MyProvider } from "../../../content/Auth2";
import { API_URL } from "../../../utils/CONSTANT";
import axios from "axios";
import { ErrorMessage, Field, Formik, Form, useFormik } from "formik";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { token } = useContext(MyProvider);
  const [data, setData] = useState({});
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);
  const formik = useFormik({
    initialValues: {
      username: data.username,
      email: data.email,
      phone: data.phone,
      isAdmin: data.isAdmin,
    },
    onSubmit: (values) => {
      setClicked(true);
      if (clicked) {
        fetchData(values);
      }
      console.log(values);
    },
  });
  const fetchData = async () => {
    const URL = `${API_URL}/api/admin/user/${id}`;
    try {
      // if (clicked) {
      //   console.log("hello");

      //   const send = await axios.put(URL, values, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   setClicked(false);
      //   console.log(send);
      // }
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // const senddata = await axios.post(URL, {
      //   headers: {},
      // });
      // console.log(res);
      setData(res.data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      // toast(error.re.res.data.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-[50%] bg-blue-100  ">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full p-7 text-xl flex flex-col gap-10  text-black py-10"
        >
          <div className="w-full sm:w-[90%] flex flex-col gap-2 ">
            <label className=" text-2xl">Username</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              className="text-black p-1 rounded-sm"
            />
          </div>
          <div className="w-full sm:w-[90%] flex flex-col gap-2 ">
            <label className=" text-2xl">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              className="text-black p-1 rounded-sm"
            />
          </div>
          <div className="w-full sm:w-[90%] flex flex-col gap-2 ">
            <label className=" text-2xl">phone</label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              className="text-black p-1 rounded-sm"
            />
          </div>
          <div className="w-full sm:w-[40%] flex flex-col gap-2 ">
            <label className="text-2xl" htmlFor="isadmin">
              IsAdmin
            </label>
          </div>
          <button
            type="submit"
            className="p-2 border-2 border-blue-700 rounded-xl"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
