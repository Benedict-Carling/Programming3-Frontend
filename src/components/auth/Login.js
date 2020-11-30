import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

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
    history.push("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="login-email"
          type="email"
        />
        <label htmlFor="login-password">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="login-password"
          type="password"
        />
        <input type="submit" value="register" />
      </form>
    </div>
  );
}
