import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "../Pages/userAuth";
import Dashboard from "./user/dashboard";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth/:page" element={<UserAuth />} />
        <Route path="/auth/:page" element={<UserAuth />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
