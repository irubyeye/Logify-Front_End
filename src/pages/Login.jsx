import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [tryLogin, isLoading, error] = useFetch(async (login, password) => {
    try {
      const response = await PostService.login(login, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("auth", "true");
      setIsAuth(true);
    } catch (e) {
      alert(e.response.data);
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await tryLogin(login, password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <MyInput
          type="text"
          placeholder="Email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></MyInput>
        <MyButton>Войти</MyButton>
        <div>
          Want to sign up? Tap to <Link to={"/register"}>Register</Link>
        </div>
      </form>
    </div>
  );
}
