import React from "react";
import { useEffect, useState } from "react";
const Services = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const URL = "https://api.durlavparajuli.com.np/api/data/service";

    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (res.ok) {
        setData(data);
        console.log(data);
      } else {
        console.log("Server Error!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="pt-10 w-full h-full flex gap-10 justify-center flex-wrap  px-20 bg-black text-white ">
        {data.map((item, i) => (
          <div
            // onClick={() => {
            //   navigate(`/service/${item._id}`);
            // }}
            key={item._id}
            className=" w-[370px] h-[500px] flex flex-col justify-center items-center rounded-lg border-white bg-inherit border-2 shadow-xl py-10 px-3 "
          >
            <div className="w-[75%] h-[70%] flex flex-col justify-center items-center gap-2 my-7 ">
              <img
                src="/"
                alt="#"
                className="p-3 h-[120px] w-[120.45px] rounded-full border-2 border-white  "
              />
              <h4 className="text-3xl text-center">{item.service}</h4>
            </div>
            <p>{item.description}</p>
            <div className="w-auto my-5 px-7 py-2 rounded-sm border-white border-2 bg-inherit  text-sm ">
              <p className="text-yellow-300">Provider: {item.provider}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
