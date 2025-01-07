import React, { useContext, useEffect } from "react";
import { MyAuthProvider } from "../../content/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(MyAuthProvider);

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  });

  return <div>Dashbord</div>;
};

export default Dashbord;
