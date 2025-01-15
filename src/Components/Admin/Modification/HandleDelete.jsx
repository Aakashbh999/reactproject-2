import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { API_URL } from "../../../utils/CONSTANT";
import { MyProvider } from "../../../content/Auth2";

const HandleDelete = async (id, endpoint) => {
  const { token } = useContext(MyProvider);
  console.log(id);
  const URL = `${API_URL}/${endpoint}/${id}`;
  const check = window.confirm("data will be deleted parmanently!");
  if (check) {
    return;
  }
  try {
    const res = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    toast.success(res.data.message);
  } catch (error) {
    console.log(error);
  }
};

export default HandleDelete;
