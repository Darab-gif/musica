import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Songs from "./Songs";

const NewSong = () => {
  const { newMusics, popularMusics, playlists } = useStateContext();
  return (
    <div className="mt-8 ml-32 ">
      <div>
        <h1 className="text-24 font-700 text-primary">New Release</h1>
        <div className="flex h-[16rem] items-center gap-8 overflow-x-scroll w-1125 scrollbar">
          {newMusics.map((item, index) => (
            <Songs key={index} {...item} />
          ))}
        </div>
      </div>
      {/*Popular Songs*/}
      <div className="mt-8">
        <h1 className="text-24 font-700 text-primary">Popular Music</h1>
        <div className="flex gap-8 h-[10rem] overflow-x-scroll w-1125 scrollbar">
          {popularMusics.map((item, index) => (
            <Songs key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewSong;
