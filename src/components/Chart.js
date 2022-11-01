import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Chart = ({ id, title, cover, files, info }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  const totalMin = files.reduce((total, time) => {
    const min = +time.duration.split(":")[0];
    total += min;
    return total;
  }, 0);

  const totalSec = files.reduce((total, time) => {
    const sec = time.duration.split(":")[1];
    total += sec;
    return total % 60;
  }, 0);
  return (
    <div>
      <div className="h-96 w-[420px]  bg-black-bg rounded-20 flex items-center mt-5">
        <NavLink className="flex items-center" to={"/album/" + id}>
          <img
            src={cover}
            alt={title}
            className="h-63 w-63 ml-5 rounded-[5px]"
          />

          <div className="ml-4 flex flex-col">
            <h1 className="text-light text-17 font-400">{title}</h1>
            <p className="font-400 text-[14px] text-white">
              {info.substring(0, 30)}...
            </p>
            <p className="font-400 text-12 text-light">
              {totalMin} : {totalSec}
            </p>
          </div>
        </NavLink>
        <span
          onClick={handleLike}
          className="h-37 w-37 rounded-full cursor-pointer flex text-secondary items-center justify-center border-2 border-white ml-20"
        >
          {like ? (
            <BiHeart className="text-red" size={24} />
          ) : (
            <BiHeart className="" />
          )}
        </span>
      </div>
    </div>
  );
};

export default Chart;
