import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "../Pages/userAuth";
import Dashboard from "../Pages/user/dashboard";
import Home from "../Pages/home";
import AdminDashboard from "../Pages/admin/dashboard";
import ResetPassword from "../Pages/resetPage";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth/:page" element={<UserAuth />} />
        <Route path="/auth/:page" element={<UserAuth />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/password/reset" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
