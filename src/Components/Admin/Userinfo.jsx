import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../../utils/CONSTANT";
import { toast } from "react-toastify";
import axios from "axios";
import { MyProvider } from "../../content/Auth2";
import { Link } from "react-router-dom";

const Userinfo = () => {
  const { token, setIsClicked, isClicked } = useContext(MyProvider);
  const [data, setData] = useState(null);
  // console.log(isClicked);

  const fetchData = async () => {
    const URL = `${API_URL}/api/admin/users`;
    try {
      const res = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res);
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast(error.re.res.data.message);
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
              <th className="border-2 border-black p-2 text-xl">Is Admin</th>
              <th className="border-2 border-black p-2 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => (
                <tr key={index} className="border-2 border-black">
                  <td className="border-2 border-black p-2 text-xl">
                    {item.username}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.email}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.phone}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.isAdmin ? "Yes" : "No"}
                  </td>
                  <td className="border-2 border-black p-2 text-xl flex gap-3">
                    <Link
                      to={`/dashboard/edit/${item._id}`}
                      className="p-2 bg-blue-500 rounded-xl"
                    >
                      Edit
                    </Link>

                    <button className="p-2 bg-red-700 rounded-xl">
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

export default Userinfo;
