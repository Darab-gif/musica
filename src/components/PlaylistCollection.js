import React from "react";
import { NavLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";

const PlaylistCollection = ({ id, title, cover }) => {
  return (
    <div className="relative h-[10rem] w-[10rem] rounded-32">
      <NavLink to={"/album/" + id}>
        <img src={cover} alt="" className="object-cover" />
        <div>
          <h3>{title}</h3>
          <h3>2.5k likes</h3>
        </div>
      </NavLink>
      <span className="bg-secondary py-4 px-4 rounded-full text-light">
        <BsPlay size={24} />
      </span>
    </div>
  );
};

export default PlaylistCollection;
