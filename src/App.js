import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./context/UserContext";
import AccountManagement from "./components/AccountManagement/AccountManagement";
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home/home";
import Data from "./components/Data/Data";
import Login from "./components/Login/Login";
import Logs from "./components/Logs/Logs";
import profile from "./components/Profile/profile";
import "./style.css";

/* Function to render all the components of the website
 */
export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          {userData.token ? (
            <>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Login} />

                <Route exact path="/home" component={Home} />

                <Route
                  exact
                  path="/accountmanagement"
                  component={AccountManagement}
                />

                <Route exact path="/data" component={Data} />

                <Route exact path="/logs" component={Logs} />

                <Route exact path="/profile" component={profile} />
              </Switch>
            </>
          ) : (
            <Switch>
              <Route path="/" component={Login} />
            </Switch>
          )}
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
