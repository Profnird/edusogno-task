import React from "react";
import logo from "../ed_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ logout, isLoggedIn }) => {
  return (
    <div className="flex justify-between p-5 bg-white shadow-lg">
      <div className="object-contain w-32 h-auto">
        <img src={logo} className="w-full" alt="logo" />
      </div>
      {isLoggedIn && (
        <div className="flex cursor-pointer items-center gap-x-2">
          <FontAwesomeIcon icon={faSignOut} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
