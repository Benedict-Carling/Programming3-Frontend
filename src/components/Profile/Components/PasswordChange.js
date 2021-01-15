import React, { useState, useContext } from "react";
import "../profile.css";
import Button from "@material-ui/core/Button";
import SuccessAlert from "../../AccountManagement/Register/Components/SuccessAlert";
import ErrorAlert from "../../AccountManagement/Register/Components/ErrorAlert";
import UserContext from "../../../context/UserContext";
import Axios from "axios";
import { ApiEndpoint } from "../../../ApiEndpoint";

/* This function allows the user to change their current passwords.
It also implements alerts to indicate if the process was successful.
It does this by making a post request to the backEnd 
*/
export default function PasswordChange() {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
  const [openErrorMessage, setOpenErrorMessage] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");

  const { userData, setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();

    const config = {
      headers: { "x-auth-token": userData.token }, // gets token of current user
    };
    const newPassword = { password, passwordCheck };
    await Axios.post(
      // makes post request to BackeEnd
      ApiEndpoint + "users/changePassword",
      newPassword,
      config
    )
      .then((response) => {
        // if successful prints success alert
        setOpenSuccessMessage(true);
        setSuccessMessage("The password has been changed successfully!");
        setPasswordCheck("");
        setPassword("");
      })
      .catch((error) => {
        setOpenErrorMessage(true);
        setErrorMessage(error.response.data.msg); // we get the error message from the post request made in the backend
      });
  };
  function validateForm() {
    // makes sure that there are no empty fields when you submit a registration
    return password.length > 0 && passwordCheck.length > 0;
  }
  return (
    <div>
      <form>
        <h1 className="Profile-header">Change password:</h1>
        <label className="Profile-password">
          <h1 htmlFor="register-password">New Password:</h1>
        </label>

        <input
          className="Textfield"
          onChange={(e) => setPassword(e.target.value)} // when the form is submitted sets the password variable to the value given
          id="register-password"
          type="password"
        />

        <label className="Profile-passwordCheck">
          <h1 htmlFor="register-passwordCheck">Password verification</h1>
        </label>

        <input
          className="Textfield"
          onChange={(e) => setPasswordCheck(e.target.value)} // when the form is submitted sets the passwordCheck variable to the value given
          id="register-passwordCheck"
          type="password"
          placeholder="Verify password"
        />
        <Button
          onClick={submit} // submits the form
          variant="contained"
          color="secondary"
          type="submit"
          value="Register"
          disabled={!validateForm()} // disables the button unless all the conditions stated in the function validateForm() are met
        >
          Change Password
        </Button>

        <SuccessAlert
          setOpen={setOpenSuccessMessage}
          open={openSuccessMessage}
          Message={SuccessMessage} // from SuccessAlert.js
        />
        <ErrorAlert
          setOpen={setOpenErrorMessage}
          open={openErrorMessage}
          Error={ErrorMessage} // from ErrorAlert.js
        />
      </form>
    </div>
  );
}
