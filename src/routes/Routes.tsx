import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { NotFound } from "../components/NotFound/NotFound";
import { ProtectRoutes } from "../components/ProtectRoutes/ProtectRoutes";

import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Extras } from "../pages/Extras/Extras";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";

export const MainRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":category" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="extra" element={<Extras />} />
          <Route element={<ProtectRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
