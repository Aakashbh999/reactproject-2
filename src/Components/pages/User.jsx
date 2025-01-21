import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MyProvider } from "../../content/Auth2";

const User = () => {
  const { logOut } = useContext(MyProvider);
  return (
    <>
      <div className="c h-full max-w-[80%] flex gap-3 relative left-[20%] top-10">
        <div className=" h-[100vh] w-auto border-2  flex flex-col gap-12">
          <div className="user">
            <Link to={"/user/editprofile"}>Edit Profile</Link>
          </div>

          <div className="contact">
            <Link to={"/user/changepassword"}>Change Password</Link>
          </div>
          <div className="service">
            <button
              onClick={() => {
                logOut();
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="i w-full border-2 border-l-0">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default User;
