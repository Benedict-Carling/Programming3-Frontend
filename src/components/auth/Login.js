import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import "./Login.css";
import covidStats from "./covidStats.png";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

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
    history.push("/");
  };

  return (
    <div className = "Login">
    <header className="Login-MainTitle">
      <h1 className="Login-title">Welcome to REACT 2</h1>
    </header>
    <img src={covidStats} className="Login-picture" alt="covidStats"/>
      <header className="Login-header">
          <h1 className="Login-title">Log in</h1>
      </header> 
      <Form onSubmit={submit}>
        <Form.Group size="lg" controlId="email"></Form.Group>
          <Form.Label htmlFor="login-email">Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              id="login-email"
              type="email"
            />
        <Form.Group>
        <Form.Group size="lg" controlId="email"></Form.Group>
          <Form.Label htmlFor="login-password">password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              id="login-password"
              type="password"
            />
          </Form.Group>  
        <Button block size="lg" value="register" type="submit" disabled={!validateForm()}>
          login
        </Button>
      </Form>
    </div>
  );
}
