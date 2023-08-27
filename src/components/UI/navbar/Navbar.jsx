import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    localStorage.removeItem("id");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Exit</MyButton>

      <div className="navbar__links">
        <Link to="/about">About us</Link>&nbsp;
        <Link to="/posts">Posts</Link>&nbsp;
        <Link to="/cargos">Cargos</Link>
      </div>
    </div>
  );
}
