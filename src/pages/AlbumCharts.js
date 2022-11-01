import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { BiPlay, BiAddToQueue } from "react-icons/bi";
import AlbumCollection from "../components/AlbumCollection";

const AlbumCharts = () => {
  const { playlists } = useStateContext();
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState(false);

  const cover = data?.cover;
  const title = data?.title;
  const files = data?.files;
  const info = data?.info;

  useEffect(() => {
    const data = playlists.find((item) => item.id === id);
    setData(data);
  }, [playlists]);

  const totalDuration = files?.reduce((total, file) => {
    const duration = +file.duration.split(":")[0];
    total += duration;
    return total;
  }, 0);
  return (
    <div className="min-h-[100vh] ml-32 ">
      <img
        src={cover}
        alt=""
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-top object-cover opacity-[0.15]"
      />
      <div className="flex gap-6 pt-24 relative">
        <img
          src={cover}
          alt=""
          className="w-[284px] h-[289px] rounded-[30px] "
        />
        <div className="flex flex-col gap-3 w-[28rem] pt-7">
          <h1 className="text-[35px] font-700 text-light-blue">{title}</h1>
          <p className="text-light text-[18px] font-500">{info}</p>
          <h2 className="text-light text-[14px] font-600">
            {files?.length} songs - {totalDuration} mins+
          </h2>
          <div className="flex gap-4">
            <div className="w-[8rem] h-[3rem] rounded-[10px] flex items-center justify-center bg-white cursor-pointer">
              <span className="py-1 px-1 rounded-full bg-secondary ">
                <BiPlay />
              </span>
              <p className="text-light ml-2">Play All</p>
            </div>
            <div
              onClick={() => setCollection((prev) => !prev)}
              className="w-[12rem] h-[3rem] rounded-[10px] flex items-center  bg-white cursor-pointer"
            >
              <span className="py-1 px-1 rounded-full bg-secondary ml-7">
                <BiAddToQueue />
              </span>
              <p className="text-light ml-2">
                {collection ? "Undo" : "Add Collection"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {files?.map((item, index) => (
          <AlbumCollection key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AlbumCharts;
