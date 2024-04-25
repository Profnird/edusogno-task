import React from "react";
import { useParams } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Topbar from "../Components/Topbar";

const UserAuth = () => {
  const { page } = useParams();
  return (
    <div className="border-2 bg-edusog-image bg-cover bg-[#f2f2f2] flex flex-col min-h-screen">
      <Topbar />
      <div className="flex flex-1 w-full p-5 h-full justify-center">
        {(page === "login" || page === "signin") && <Login />}
        {(page === "register" || page === "signup") && <Register />}
      </div>
    </div>
  );
};

export default UserAuth;
