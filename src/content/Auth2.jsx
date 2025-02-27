import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyProvider = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    // console.log("hello logout");
    const check = window.confirm("Sure you want to LogOut!");
    if (check) {
      setToken(localStorage.removeItem("token"));
      navigate("/login");
    } else return;
  };
  const verifyToken = async () => {
    const URL = "https://api.durlavparajuli.com.np/api/auth/user";
    try {
      console.log("enter to auth");
      const res = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        console.log("verifyed");
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        logOut();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);
  useEffect(() => {}, []);
  return (
    <MyProvider.Provider
      value={{
        setToken,
        setIsLoggedIn,
        isLoggedIn,
        token,
        logOut,
      }}
    >
      {children}
    </MyProvider.Provider>
  );
};
