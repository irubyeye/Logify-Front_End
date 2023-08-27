import React, { useContext } from "react";
import Posts from "../pages/Posts";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context";
import Cargos from "../pages/Cargos";

export default function AppRouter() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.component}
        />
      ))}
      <Route path="/*" element={<Cargos />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          element={route.component}
        />
      ))}
      <Route path="/*" element={<Login />} />
    </Routes>
  );
}
