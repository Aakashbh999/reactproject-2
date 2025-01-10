import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyProvider = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   console.log(children);
  console.log(isLoggedIn);

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const verifyToken = async () => {
    const URL = "https://api.durlavparajuli.com.np/api/auth/user";
    try {
      const res = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("hello");
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (error) {
      logOut();
      console.log(error);
    }
  };

  console.log(token);

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, []);

  return (
    <MyProvider.Provider
      value={{ token, setToken, isLoggedIn, logOut, setIsLoggedIn }}
    >
      {children}
    </MyProvider.Provider>
  );
};
