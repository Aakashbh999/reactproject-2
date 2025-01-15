import React, { useContext, useEffect, useState } from "react";
// import { MyAuthProvider } from "../../content/AuthProvider";
import { MyProvider } from "../../content/Auth2";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashbord = () => {
  const { isLoggedIn, token } = useContext(MyProvider);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return navigate("/login");
  }, [token]);

  return (
    <>
      <div className="c h-full max-w-[80%] flex gap-3 relative left-[20%] top-10">
        <div className=" h-[100vh] w-auto border-2  flex flex-col gap-12">
          <div className="user">
            <Link to={"/dashboard/users"}>user</Link>
          </div>
       
          <div className="contact">
            <Link to={"/dashboard/contact"}>Contact</Link>
          </div>
          <div className="service">
            <Link to={"/dashboard/service"}>Service</Link>
          </div>
        </div>
        <div className="i w-full border-2 border-l-0">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
