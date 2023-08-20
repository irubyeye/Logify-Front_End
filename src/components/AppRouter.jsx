import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Route, Routes } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
