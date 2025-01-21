import React, { useContext, useEffect, useState } from "react";
import { MyProvider } from "../../content/Auth2";
import Loading from "../../useHooks/Loading";
import { deleteRequest, getPrivateRequest } from "../../utils/queries";

const Contactinfo = () => {
  const [data, setData] = useState(null);
  const { isLoading, setIsLoading, handleLoading } = Loading();

  const hello = async () => {
    const data = await getPrivateRequest("/api/admin/contacts");
    setData(data.data);
    setIsLoading(false);
  };
  const handleDelete = async (id) => {
    console.log("hello");
    const res = await deleteRequest(`/api/admin/contacts/${id}`);
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
              <th className="border-2 border-black p-2 text-xl">Username</th>
              <th className="border-2 border-black p-2 text-xl">Email</th>
              <th className="border-2 border-black p-2 text-xl">Phone</th>
              <th className="border-2 border-black p-2 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
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
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contactinfo;
