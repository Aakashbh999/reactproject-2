import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../utils/CONSTANT";
import axios from "axios";
import { MyProvider } from "../../content/Auth2";
import { useFormik } from "formik";

const Profiledeteils = () => {
  const { token } = useContext(MyProvider);
  const [data, setData] = useState();
  const fetchData = async () => {
    const URL = `${API_URL}/api/auth/user`;
    try {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res);
      // console.log(res.data.userData);
      setData(res.data.userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col p-7 gap-3">
        <h3>Profile Details</h3>
        <span>Username: {data?.username} </span>
        <span>Email: {data?.email} </span>
        <span>Phone: {data?.phone} </span>
        {/* <label htmlFor="">Username:</label>
        <input type="text" value={data?.isad} readOnly /> */}
      </div>
    </>
  );
};

export default Profiledeteils;
