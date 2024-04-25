import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "../Pages/userAuth";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth/:page" element={<UserAuth />} />
        <Route path="/auth/:page" element={<UserAuth />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
