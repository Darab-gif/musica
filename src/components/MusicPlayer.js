import React, { useState } from "react";
import {
  AiFillCaretRight,
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlinePause,
} from "react-icons/ai";
import { BsFillVolumeUpFill, BsArrowRepeat, BsShuffle } from "react-icons/bs";
import { music4 } from "../assets";

const MusicPlayer = () => {
  const [play, setPlay] = useState();

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };
  return (
    <div className="h-[8rem] w-[100%] bg-primary backdrop-blur-5 fixed bottom-1 flex items-center  gap-32">
      <div className="flex ml-[10rem] pt-5">
        <img src={music4} alt="" />
        <div className=" text-light">
          <h1>Seasons in</h1>
          <p>James</p>
        </div>
      </div>
      <div>
        <div className="flex text-light gap-10 justify-center pt-5">
          <span>
            <BsShuffle size={22} className="cursor-pointer" />
          </span>
          <span>
            <AiFillStepBackward size={22} className="cursor-pointer" />
          </span>
          <span className="bg-secondary" onClick={handlePlay}>
            {play ? (
              <AiFillCaretRight size={22} className="cursor-pointer" />
            ) : (
              <AiOutlinePause size={22} className="cursor-pointer" />
            )}
          </span>
          <span>
            <AiFillStepForward size={22} className="cursor-pointer" />
          </span>
          <span>
            <BsArrowRepeat size={22} className="cursor-pointer" />
          </span>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="text-light">0:00</span>
          <input type="range" name="" id="" className="mt-4 w-[20rem]" />
          <span className="text-light">3:45</span>
        </div>
      </div>
      <div className="flex pt-5 items-center gap-3">
        <span>
          <BsFillVolumeUpFill className="text-secondary" />
        </span>
        <input type="range" name="" id="" className="volume" />
      </div>
    </div>
  );
};

export default MusicPlayer;
