// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const MyAuthProvider = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   console.log(children);

//   const Logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/login");
//     setIsLoggedIn(false);
//   };

//   const verifyToken = async () => {
//     const URL = "https://api.durlavparajuli.com.np/api/auth/user";
//     try {
//       const res = await fetch(URL, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (res.ok) {
//         setIsLoggedIn(true);
//         navigate("/dashboard");
//       } else {
//         setIsLoggedIn(false);
//         Logout();
//         navigate("/login");
//       }
//     } catch (err) {
//       console.log(err);
//       Logout();
//       navigate("/login");
//     }
//   };

//   console.log(isLoggedIn);

//   useEffect(() => {
//     if (token) {
//       verifyToken();
//     } else {
//       Logout();
//       navigate("/login");
//     }
//   }, []);
//   return (
//     <MyAuthProvider.Provider value={{ token, isLoggedIn, Logout }}>
//       {children}
//     </MyAuthProvider.Provider>
//   );
// };
