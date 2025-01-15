import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../utils/CONSTANT";
import { toast } from "react-toastify";
import axios from "axios";
import { MyProvider } from "../../content/Auth2";
// import HandleDelete from "./Modification/HandleDelete";

const Contactinfo = () => {
    const { token } = useContext(MyProvider);
    const [data, setData] = useState(null);
    const fetchData = async () => {
      const URL = `${API_URL}/api/admin/contacts`;
      try {
        const res = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //   console.log(res);
        setData(res.data);
        console.log(data);
      } catch (error) {
        console.log(error);
        toast(error.re.res.data.message);
      }
    };
  const handleDelete = async (id) => {
    console.log(id);
    const URL = `${API_URL}/api/admin/contacts/${id}`;
    const check = window.confirm("data will be deleted parmanently!");
    if (!check) {
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
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="w-[50%]  ">
        <table className="border-2 border-black ">
          <thead>
            <tr className="border-2 border-black ">
              <th className="border-2 border-black p-2 text-xl">Username</th>
              <th className="border-2 border-black p-2 text-xl">Email</th>
              <th className="border-2 border-black p-2 text-xl">Phone</th>
              <th className="border-2 border-black p-2 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => (
                <tr key={index} className="border-2 border-black">
                  <td className="border-2 border-black p-2 text-xl">
                    {item.name}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.email}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.phone}
                  </td>
                  <td className="border-2 border-black p-2 text-xl  ">
                    <button
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                      className="p-2 bg-red-700 rounded-xl"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contactinfo;
