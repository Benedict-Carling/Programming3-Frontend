import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { email, password, passwordCheck };
    await Axios.post("http://localhost:5000/users/register", newUser);
    const loginRes = await Axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    history.push("/home");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="register-email"
          type="email"
        />
        <label htmlFor="register-password">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="register-password"
          type="password"
        />
        <label htmlFor="register-passwordCheck">p Check</label>
        <input
          onChange={(e) => setPasswordCheck(e.target.value)}
          id="register-passwordCheck"
          type="password"
          placeholder="verify password"
        />
        <input type="submit" value="register" />
      </form>
    </div>
  );
}
