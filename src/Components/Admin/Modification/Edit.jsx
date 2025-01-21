import React, { useContext, useEffect, useState } from "react";
import { MyProvider } from "../../../content/Auth2";
import { API_URL } from "../../../utils/CONSTANT";
import axios from "axios";
import { ErrorMessage, Field, Formik, Form, useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const navigate = useNavigate();
  const { token } = useContext(MyProvider);
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: false,
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { componentname } = useParams();
  let endpoint;
  if (componentname === "contactinfo") {
    endpoint = "api/admin/user";
  } else if (componentname === "serviceinfo") {
    endpoint = "api/admin/service";
  } else {
    endpoint = "";
  }
  const fetchData = async (endpoint) => {
    const URL = `${API_URL}/${endpoint}/${id}`;
    console.log(URL);
    try {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(res.data);

      setLoading(false);
      // console.log(res.data);

      // console.log(data);
    } catch (error) {
      console.log(error);
      // toast(error.re.res.data.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      username: data.username ||'',
      email: data.email || "",
      phone: data.phone || "",
      isAdmin: data.isAdmin || false,
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      updateData(values);

      // console.log(values);
    },
  });
  const updateData = async (values) => {
    const URL = `${API_URL}/api/admin/users/${id}`;
    try {
      const res = await axios.put(URL, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      toast.success(res.data.message);
      fetchData();
      navigate("/dashboard/users");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData(endpoint);
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
              onChange={formik.handleChange}
              className="text-black p-1 rounded-sm"
            />
          </div>
          <div className="w-full sm:w-[90%] flex flex-col gap-2 ">
            <label className=" text-2xl">phone</label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="text-black p-1 rounded-sm"
            />
          </div>
          <div className="w-full sm:w-[40%] flex flex-col gap-2 ">
            <label className="text-2xl" htmlFor="isadmin">
              IsAdmin
            </label>
            <select
              name="isAdmin"
              value={formik.values.isAdmin}
              onChange={formik.handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
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
