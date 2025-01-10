import React from "react";
import { nav_items } from "./Components/pages/navitems";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <div className="w-full p-3 flex justify-between items-center gap-3 bg-gray-600">
        <div className="w-[120px] max-w-[200px]  ">
          <h3 className="font-sans text-2xl font-semibold">Portfolio</h3>
        </div>
        <div className="search p-1">
          <label htmlFor="search">Search: </label>
          <input type="text" className="rounded-sm p-1 border-black border-2" />
        </div>
        <div className=" navigate self-end ml-7 px-5 flex gap-12 items-center justify-around text-2xl font-semibold font-serif ">
          {nav_items.map((items, i) => {
            return (
              <ul key={i}>
                <li>
                  <Link to={items.href}>{items.title}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
