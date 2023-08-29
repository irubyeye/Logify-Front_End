import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";

import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/UI/navbar/MyNavbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
