import React, { useContext } from "react";
import { nav_items } from "./Components/pages/navitems";
import { Link } from "react-router-dom";
import { MyProvider } from "./content/Auth2";
import loginphoto from "./photos/loginphoto.png";

const Navbar = () => {
  const { isLoggedIn, logOut } = useContext(MyProvider);
  const handleLoggedIn = () => {
    if (isLoggedIn) {
      return (
        <div className="w-[70px] h-[70px] rounded-full flex gap-2 justify-center items-center mx-3 ">
          <Link to="/dashboard">Dashboard</Link>
          <img
            src={loginphoto}
            alt=""
            className="w-full h-full rounded-full object-fill"
          />
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  };

  return (
    <>
      <div className="w-full p-3 grid grid-cols-7 gap-3 bg-gray-600">
        <div className="w-[120px] max-w-[200px]  ">
          <h3 className="font-sans text-2xl font-semibold">Portfolio</h3>
        </div>
        <div className="search col-span-2 p-1">
          <label htmlFor="search">Search: </label>
          <input type="text" className="rounded-sm p-1 border-black border-2" />
        </div>
        <div className=" navigate col-span-4 self-end ml-7 px-5 flex gap-7 items-center justify-around text-md font-semibold font-serif ">
          {nav_items.map((items, i) => {
            return (
              <ul key={i}>
                <li>
                  <Link to={items.href}>{items.title}</Link>
                </li>
              </ul>
            );
          })}
          <button onClick={logOut}>{handleLoggedIn()}</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
``;
