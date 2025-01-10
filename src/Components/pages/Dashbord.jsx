import React, { useContext, useEffect } from "react";
// import { MyAuthProvider } from "../../content/AuthProvider";
import { MyProvider } from "../../content/Auth2";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const { isLoggedIn } = useContext(MyProvider);
  const navigate = useNavigate();
  // const { isLoggedIn } = useContext(MyAuthProvider);
  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return navigate("/login");
  }, []);

  return <div>Dashbord</div>;
};

export default Dashbord;
