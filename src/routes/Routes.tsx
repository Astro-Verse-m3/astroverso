import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound/NotFound";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Extras } from "../Pages/Extras/Extras";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="extra" element={<Extras />} />
        <Route element={<ProtectRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
