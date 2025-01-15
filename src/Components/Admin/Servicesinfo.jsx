import React, { useContext, useEffect, useState } from "react";
import { MyProvider } from "../../content/Auth2";
import { API_URL } from "../../utils/CONSTANT";
import { toast } from "react-toastify";
import axios from "axios";

const Servicesinfo = () => {
  const { token, setIsClicked, isClicked } = useContext(MyProvider);
  const [data, setData] = useState(null);
  console.log(isClicked);

  const fetchData = async () => {
    const URL = `${API_URL}/api/admin/services`;
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
      // toast(error.re.res.data.message);
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
              <th className="border-2 border-black p-2 text-xl">S.N</th>
              <th className="border-2 border-black p-2 text-xl">Service</th>
              <th className="border-2 border-black p-2 text-xl">Description</th>
              <th className="border-2 border-black p-2 text-xl">Provider</th>
              <th className="border-2 border-black p-2 text-xl">Price</th>
              <th className="border-2 border-black p-2 text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => (
                <tr key={index} className="border-2 border-black">
                  <td className="border-2 border-black p-2 text-xl">
                    {index++}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.service}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.description}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.provider}
                  </td>
                  <td className="border-2 border-black p-2 text-xl">
                    {item.price}
                  </td>
                  <td className="border-2 border-black p-2 text-xl flex gap-3">
                    <button className="p-2 bg-green-700 rounded-xl">
                      Edit
                    </button>
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

export default Servicesinfo;
