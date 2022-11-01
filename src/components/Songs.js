import React from "react";

const Songs = ({ cover, title, id, artist }) => {
  return (
    <div className="min-w-[9rem] text-start cursor-pointer mt-4">
      <img
        src={cover}
        alt=""
        className="w-[100%] h-36 object-cover rounded-32"
      />
      <h2 className="text-xl mt-1 transition-all text-white text-center">
        {title}
      </h2>
      <h2 className="text-md mt-1 transition-all text-white text-center">
        {artist}
      </h2>
    </div>
  );
};

export default Songs;
