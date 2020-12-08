
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "./Register.css";
import Button from "@material-ui/core/Button";





export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userType, setAccountType ] = useState("");
  const [statusResult, setstatusResult] = useState("");
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
    console.log(hi)
    setstatusResult(hi.status)
    
  };
  return (
    <div className= "Register">
      <header className="Register-MainTitle">
        <h1 className="Register-title">Register an account:</h1>
      </header>
      <form onSubmit={submit}>
        <label className= "Register-email">
          <h1 htmlFor="register-email">Email:</h1>
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="register-email"
          type="email"
        />
        <label className= "Register-password">
          <h1 htmlFor="register-password">password:</h1>
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="register-password"
          type="password"
        />
        <label className="Register-passwordCheck">
          <h1 htmlFor="register-passwordCheck">password verification </h1>
        </label>
        <input
          onChange={(e) => setPasswordCheck(e.target.value)}
          id="register-passwordCheck"
          type="password"
          placeholder="verify password"
        />
        <FormControl component="fieldset">
          <label className="Register-userType">
            <h1 htmlFor="register-userType">Type of Account:</h1>
            </label>
            <RadioGroup aria-label="Type of account" name="account" value={userType} onChange={handleChange}>
              <FormControlLabel value="webmaster" control={<Radio />} label="Webmaster" />
              <FormControlLabel value="editor" control={<Radio />} label="Editor" />
              <FormControlLabel value="reviewer" control={<Radio />} label="Reviewer" />
          </RadioGroup>
         
    </FormControl>
    <Button
          onClick={submit}
          variant="contained"
          color="secondary"
          type="submit"
          value="Register"
        >
          Register
        </Button>
       
      </form>
      
    </div>
  );
}
