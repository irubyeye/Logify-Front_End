import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";
import "../styles/App.css";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name,
    surname,
    country,
    city,
    phone,
    email,
    login,
    password,
  };

  const [tryRegister, isLoading, error] = useFetch(async (data) => {
    try {
      const response = await PostService.register(data);
    } catch (e) {
      alert(error.response.data);
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await tryRegister(data);
  };

  return (
    <div className="App">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <MyInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></MyInput>
        <MyInput
          type="text"
          placeholder="Login"
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
        <MyButton>Register</MyButton>
        <div>
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
}
