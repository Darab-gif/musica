import React, { useState } from "react";
import PlaylistCollection from "../components/PlaylistCollection";

const Playlist = () => {
  const [switchLike, setSwitchLike] = useState(false);
  const [data, setData] = useState();
  return (
    <div className="ml-32 pt-24 bg-main-bg h-[65rem]">
      <div className="flex gap-4">
        <button
          className={`text-[14px] text-gray-500 font-700 px-4 py-2 border-[1px] border-gray-500 rounded-[15px] cursor-pointer ${
            !switchLike ? "bg-secondary text-primary" : ""
          } `}
          onClick={() => setSwitchLike(false)}
        >
          My Collections
        </button>
        <button
          className={`text-[14px] text-gray-500 font-700 px-4 py-2 border-[1px] border-gray-500 rounded-[15px] cursor-pointer ${
            switchLike ? "bg-secondary text-primary" : ""
          } `}
          onClick={() => setSwitchLike(true)}
        >
          Likes
        </button>
      </div>
      {/*<div className="relative">
        <div className="flex flex-col flex-wrap w-full gap-8 mt-8 sm:flex-row">
          {data.map((item, index) => (
            <PlaylistCollection key={index} {...item} />
          ))}
        </div>
          </div>*/}
    </div>
  );
};

export default Playlist;
