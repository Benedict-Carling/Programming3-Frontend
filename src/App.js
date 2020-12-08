import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./context/UserContext";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
