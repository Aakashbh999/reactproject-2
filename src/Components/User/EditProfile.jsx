import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../utils/CONSTANT";
import { useFormik } from "formik";
import axios from "axios";
import { MyProvider } from "../../content/Auth2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const navigate = useNavigate();
  const { token, setIsLoading } = useContext(MyProvider);
  const [data, setData] = useState({});
  const fetchData = async () => {
    const URL = `${API_URL}/api/auth/user`;
    try {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      // console.log(res.data.userData);
      setData(res.data.userData);
    } catch (error) {
      console.log(error);
    }
  };
  const updateData = async (values) => {
    const check = window.confirm("Update will be Permanent!");
    if (check) {
      const URL = `${API_URL}/api/auth/edit-profile`;
      try {
        const res = await axios.put(URL, values, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        toast.success(res.data.message);
        setIsLoading(false);
        navigate(-1);
        console.log(res);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    } else return;
  };
  const formik = useFormik({
    initialValues: {
      username: data.username,
      email: data.email,
      phone: data.phone,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      updateData(values);
      console.log(values);
    },
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="w-[60%] p-10 bg-slate-600 rounded-xl flex flex-col gap-5 justify-center items-center text-white   "
        >
          <div className="p-4 flex flex-col gap-2">
            <label htmlFor="">Username</label>
            <input
              className="border-2 border-black p-1 mx-3 text-black "
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
            />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              className="border-2 border-black p-1 mx-3 text-black "
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <label htmlFor="">Phone Number</label>
            <input
              className="border-2 border-black p-1 mx-3 text-black "
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
            />
          </div>
          <button
            type="submit"
            className="w-[190px] p-2 bg-blue-600 rounded-md  font-semibold"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
