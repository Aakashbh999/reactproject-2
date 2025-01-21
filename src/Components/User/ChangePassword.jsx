import React, { useContext } from "react";
import { API_URL } from "../../utils/CONSTANT";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { MyProvider } from "../../content/Auth2";

const ChangePassword = () => {
  const { token } = useContext(MyProvider);
  const fetchData = async (values) => {
    const URL = `${API_URL}/api/auth/change-password`;
    try {
      const res = await axios.put(URL, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.extraDetails);
    }
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    enableReinitialize: true,

    onSubmit: (values) => {
      console.log(values);
      fetchData(values);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className=" w-[250px] p-2 flex flex-col gap-4"
      >
        <h1>Change Password</h1>
        <div className="p-2 flex flex-col gap-4">
          <label>New Password</label>
          <input
            type="password"
            className="border-2 border-black p-1"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
          />
        </div>
        <div className="p-2 flex flex-col gap-4">
          <label>Confirm Password</label>
          <input
            type="password"
            className="border-2 border-black p-1"
            value={formik.values.confirmpassword}
            name="confirmpassword"
            onChange={formik.handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-md text-center mx-5 p-2"
        >
          Conform
        </button>
      </form>
    </>
  );
};

export default ChangePassword;
