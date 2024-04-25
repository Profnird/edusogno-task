import React from "react";
import logo from "../ed_logo.png";

const Topbar = () => {
  return (
    <div className="flex p-5 bg-white shadow-lg">
      <div className="object-contain w-32 h-auto">
        <img src={logo} className="w-full" alt="logo" />
      </div>
    </div>
  );
};

export default Topbar;
