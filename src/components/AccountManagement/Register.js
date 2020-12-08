
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userType, setAccountType ] = useState("");

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  
  const handleChange = (event) => {
    setAccountType(event.target.value);
    
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(userType) 
    console.log(email)
    console.log(password)
    console.log(passwordCheck)
    const newUser = { email, password, passwordCheck, userType };
    console.log(newUser)
    const hi = await Axios.post("http://localhost:5000/users/register", newUser);
    console.log(hi.msg)
    const loginRes = await Axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    history.push("/");
  };
  return (
    <div className= "Register">
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
        <label htmlFor="register-passwordCheck">password verification</label>
        <input
          onChange={(e) => setPasswordCheck(e.target.value)}
          id="register-passwordCheck"
          type="password"
          placeholder="verify password"
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Type of Account:</FormLabel>
            <RadioGroup aria-label="Type of account" name="account" value={userType} onChange={handleChange}>
              <FormControlLabel value="webmaster" control={<Radio />} label="Webmaster" />
              <FormControlLabel value="editor" control={<Radio />} label="Editor" />
              <FormControlLabel value="reviewer" control={<Radio />} label="Reviewer" />
          </RadioGroup>
         
    </FormControl>
        <input type="submit" value="register" />
      </form>
    </div>
  );
}
