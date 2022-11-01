import React from "react";
import {  NavLink } from "react-router-dom";
import { Navlinks, profileLink } from "../assets/data";

const Sidebar = () => {
  const activeLink = "text-secondary";
  const normalLink = "text-white";
  return (
    <div className="fixed left-10 top-32">
      <div className="w-52 h-230 bg-black-bg rounded-32 text-white flex flex-col items-center justify-center gap-5">
        {Navlinks.map((item) => (
          <NavLink
            to={`/${item.name}`}
            key={item.name}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
      <div className="w-52 h-127 mt-10 bg-black-bg rounded-32 text-white flex flex-col items-center justify-center gap-5">
        {profileLink.map((item) => (
          <NavLink
            to={`/${item.name}`}
            key={item.name}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
