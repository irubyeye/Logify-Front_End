import React, { useContext } from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Route, Routes } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context";

export default function AppRouter() {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
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
      <Route path="/*" element={<Posts />} />
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
  // <Routes>
  //   {isAuth
  //     ? privateRoutes.map((route) => (
  //         <Route
  //           key={route.path}
  //           exact={route.exact}
  //           path={route.path}
  //           element={route.component}
  //         />
  //       ))
  //     : publicRoutes.map((route) => (
  //         <Route
  //           key={route.path}
  //           exact={route.exact}
  //           path={route.path}
  //           element={route.component}
  //         />
  //       ))}
  //   <Route path="/*" element={<Error />} />
  {
    /* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/*" element={<Error />} /> */
  }
  //</Routes>;
}
