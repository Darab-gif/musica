import React from "react";
import { frame } from "../assets";
import Chart from "./Chart";
import MusicPlayer from "./MusicPlayer";
import Navbar from "./Navbar";
import NewSong from "./NewSong";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  const { playlists } = useStateContext();
  return (
    <div className="bg-main-bg h-[65rem] ">
      <Navbar />

      <div className="ml-32 pt-22 flex gap-10 ">
        <img src={frame} alt="" />
        <div className="scrollbar overflow-y-scroll h-[24rem] ">
          <h1 className="text-24 font-700 text-primary">Top Charts</h1>
          {playlists.map((item, index) => (
            <Chart key={index} {...item} />
          ))}
        </div>
      </div>
      <NewSong />
      <MusicPlayer />
    </div>
  );
};

export default Home;
