import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "../Pages/userAuth";
import Dashboard from "../Pages/user/dashboard";
import Home from "../Pages/home";
import AdminDashboard from "../Pages/admin/dashboard";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth/:page" element={<UserAuth />} />
        <Route path="/auth/:page" element={<UserAuth />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
