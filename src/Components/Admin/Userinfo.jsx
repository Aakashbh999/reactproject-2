import React, { useContext, useEffect, useState } from "react";
import { MyProvider } from "../../content/Auth2";
import { Link } from "react-router-dom";
import { deleteRequest, getPublicRequest } from "../../utils/queries";
import Loading from "../../useHooks/Loading";

const Userinfo = () => {
  const { token, setIsClicked, isClicked } = useContext(MyProvider);
  const [data, setData] = useState(null);
  const { isLoading, setIsLoading, handleLoading } = Loading();

  const hello = async () => {
    const data = await getPublicRequest("/api/admin/users");
    setData(data.data);
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    console.log("hello");
    const res = await deleteRequest(`/api/admin/users/${id}`);
    hello();
    console.log(res);
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
              <th className="border-2 border-black p-2 text-xl">Is Admin</th>
              <th className="border-2 border-black p-2 text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
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
                    to={`/dashboard/edit/contactinfo/${item._id}`}
                    className="p-2 bg-blue-500 rounded-xl"
                  >
                    Edit
                  </Link>

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

export default Userinfo;
