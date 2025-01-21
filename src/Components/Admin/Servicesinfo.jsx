import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteRequest, getPrivateRequest } from "../../utils/queries";
import Loading from "../../useHooks/Loading";

const Servicesinfo = () => {
  const [data, setData] = useState(null);
  const { isLoading, setIsLoading, handleLoading } = Loading();

  const hello = async () => {
    const data = await getPrivateRequest("/api/admin/services");
    setData(data.data);
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    const res = await deleteRequest(`api/admin/services/${id}`);
    hello();
  };

  useEffect(() => {
    hello();
  }, []);
  if (isLoading) return handleLoading();
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
            {data?.map((item, index) => (
              <tr key={index} className="border-2 border-black">
                <td className="border-2 border-black p-2 text-xl">{index++}</td>
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
                  <Link
                    to={`/dashboard/edit/serviceinfo/${item._id}`}
                    className="p-2 bg-green-700 rounded-xl"
                  >
                    Edit
                  </Link>
                  <button
                    className="p-2 bg-red-700 rounded-xl"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Servicesinfo;
