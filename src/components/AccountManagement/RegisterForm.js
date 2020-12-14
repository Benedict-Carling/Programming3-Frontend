import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import "./Register.css";
import Button from "@material-ui/core/Button";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userType, setAccountType] = useState("");
  const [statusResult, setstatusResult] = useState("");
  const { setUserData } = useContext(UserContext);
  const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(userType);
    console.log(email);
    console.log(password);
    console.log(passwordCheck);
    const newUser = { email, password, passwordCheck, userType };
    console.log(newUser);
    const hi = await Axios.post(
      "http://localhost:5000/users/register",
      newUser
    );
    console.log(hi);
    setstatusResult(hi.status);
    if (hi.status === 200) setOpenSuccessMessage(true);
  };

  function validateForm() {
    // makes sure that there are no empty fields when you submit a registration
    return (
      email.length > 0 &&
      password.length > 0 &&
      passwordCheck.length > 0 &&
      userType.length > 0
    );
  }

  function AlertCheck() {
    if (statusResult === 200) {
      return <SuccessAlert />;
    } else {
      return <ErrorAlert />;
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label className="Register-email">
          <h1 htmlFor="register-email">Email:</h1>
        </label>

        <input
          className="Textfield"
          onChange={(e) => setEmail(e.target.value)}
          id="register-email"
          type="email"
        />

        <label className="Register-password">
          <h1 htmlFor="register-password">Password:</h1>
        </label>

        <input
          className="Textfield"
          onChange={(e) => setPassword(e.target.value)}
          id="register-password"
          type="password"
        />

        <label className="Register-passwordCheck">
          <h1 htmlFor="register-passwordCheck">Password verification</h1>
        </label>

        <input
          className="Textfield"
          onChange={(e) => setPasswordCheck(e.target.value)}
          id="register-passwordCheck"
          type="password"
          placeholder="Verify password"
        />

        <FormControl component="fieldset">
          <label className="Register-userType">
            <h1 htmlFor="register-userType">Type of Account:</h1>
          </label>

          <RadioGroup
            aria-label="Type of account"
            name="account"
            value={userType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="webmaster"
              control={<Radio />}
              label="Webmaster"
            />

            <FormControlLabel
              value="editor"
              control={<Radio />}
              label="Editor"
            />

            <FormControlLabel
              value="reviewer"
              control={<Radio />}
              label="Reviewer"
            />
          </RadioGroup>
        </FormControl>

        <Button
          onClick={submit}
          onSubmit={AlertCheck()}
          variant="contained"
          color="secondary"
          type="submit"
          value="Register"
          disabled={!validateForm()} // disables the button unless all the conditions stated in the function validateForm() are met
        >
          Register
        </Button>
      </form>
      <SuccessAlert setOpen={setOpenSuccessMessage} open={openSuccessMessage} />
    </div>
  );
}
