import React, { useState } from "react";
import { BiHeart, BiDotsVerticalRounded } from "react-icons/bi";

const AlbumCollection = ({ cover, title, playId, id, duration, artist }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-1125 h-[4rem] mt-8 bg-primary backdrop-blur-5 rounded-[15px] cursor-pointer flex items-center justify-between">
      <div className="flex items-center gap-3 ml-3">
        <img src={cover} alt="" className="h-[45px] w-[45px] rounded-[5px]" />
        <span
          className="text-secondary "
          onClick={() => setLike((prev) => !prev)}
        >
          {like ? <BiHeart className="text-red scale-125" /> : <BiHeart />}
        </span>
      </div>
      <div className="flex-[4] flex  justify-between items-center text-light mr-20">
        <h3 className="text-white font-400 text-[14px] ml-20 flex-[1]">
          {title} - {artist}
        </h3>
        <div className="flex-[1]">
          <h3 className="text-center ">Hip-Hop</h3>
        </div>
        <div>
          <h3>{duration}</h3>
        </div>
      </div>

      <div className="mr-5 text-light">
        <span>
          <BiDotsVerticalRounded />
        </span>
      </div>
    </div>
  );
};

export default AlbumCollection;
