import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import "./Login.css";
import covidStats from "./covidStats.png";
import Button from "@material-ui/core/Button";
import ForgotPassword from "./ForgotPassword";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const logInUser = { email, password };
    const loginRes = await Axios.post(
      "http://localhost:5000/users/login",
      logInUser
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    history.push("/home");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Login">
      <header className="Login-MainTitle">
        <h1 className="Login-title">Welcome to REACT 2</h1>
      </header>
      <img src={covidStats} className="Login-picture" alt="covidStats" />
      <header className="Login-header">
        <h1 className="Login-title">Log in</h1>
      </header>
      <form onSubmit={submit}>
        <label className="Label" htmlFor="login-email">Email</label>
        <input className="Textfield"
          onChange={(e) => setEmail(e.target.value)}
          id="login-email"
          type="email"
        />
        <label className="Label" htmlFor="login-password">Password</label>
        <input className="Textfield"
          onChange={(e) => setPassword(e.target.value)}
          id="login-password"
          type="password"
        />
        <Button 
          onClick={submit}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Login
        </Button>
        <Button 
          onClick={handleClickOpen}
          style={{
            fontSize: 10
          }}
          variant="text"
          color="#2D3E4E"
          type="submit"
        >
          Forgot your password
        </Button>
      </form>
      <ForgotPassword
      open = {open}
      handleClose = {handleClose}
      />
    </div>
  );
}
