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
    // this bit of the code still runs if theres an error
    // but the status code will be 400 or 404 or something like
    // that we can say if status code is not null and not 200 theres
    // been an error
    // iif status code !== null && status code !== 200
    // then we want to open the error success message
    // and
    // if theres an error hi.msg contains the error message of hi.data.msg
    //or something like that if you just console.log hi and look in inspect
    // you should see how to get the message
    // then you can set the string from hi.msg to a variable and pass that into
    // the error message and display it
    // you can display javascript variable it html/(the return section)
    // like <div>{errorMessage}</div?
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
