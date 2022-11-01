import React from "react";
import { logo, search } from "../assets";

const Navbar = () => {
  return (
    <nav className="flex  pt-8 ml-32">
      <img src={logo} alt="logo" />
      <div className="flex gap-3 h-73 w-1122 bg-main-bg text-white items-center ml-24">
        <span>
          <img src={search} alt="search" />
        </span>
        <input
          type="text"
          placeholder="search artists"
          className="bg-inherit outline-none border-none text-14 font-600"
        />
      </div>
    </nav>
  );
};

export default Navbar;
