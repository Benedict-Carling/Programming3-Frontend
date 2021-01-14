import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import Axios from "axios";
import "../Login.css";
import { Grid } from "@material-ui/core";
import PasswordButton from "./PasswordButton";
import Button from "@material-ui/core/Button";
import ErrorAlert from "../../AccountManagement/Register/Components/ErrorAlert.js";

/* Function to authentify the input for logging in, in the Login page, and to display 
an error message if the credentials are not valid
*/
export default function LoginForm() {

  // Variables that may change through the log in process
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [openErrorMessage, setOpenErrorMessage] = useState(false);

  const { setUserData } = useContext(UserContext) || "";
  const history = useHistory();

  // Function to authentify there is an existing account with the email and password provided
  const submit = async (e) => {
    e.preventDefault();
    const logInUser = { email, password };
    try {
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        logInUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      history.push("/home");
    } catch (error) {
      setOpenErrorMessage(true);
      setErrorMessage(error.response.data.msg); // error message from the post request made in the backend
    }
  };

  return (
    <Grid container spacing={2} width="100%" margin="5px">
      <Grid item xs={12} md={12} padding="5px">
        <form onSubmit={submit}>
          <label className="Label" htmlFor="login-email">
            Email
          </label>

          <input
            className="Textfield"
            onChange={(e) => setEmail(e.target.value)}
            id="login-email"
            type="email"
          />

          <label className="Label" htmlFor="login-password">
            Password
          </label>

          <input
            className="Textfield"
            onChange={(e) => setPassword(e.target.value)}
            id="login-password"
            type="password"
          />
        </form>
      </Grid>

      <Grid item xs={1} md={1} padding="5px"></Grid>

      <Grid item xs={5} md={5} padding="5px">
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={submit}
        >
          LOGIN
        </Button>
      </Grid>

      <Grid item xs={5} md={5}>
        <PasswordButton />
      </Grid>

      <Grid className="Alert" item xs={5} sm={5} md={9} lg={12}>
        <ErrorAlert
          setOpen={setOpenErrorMessage}
          open={openErrorMessage}
          Error={ErrorMessage}
        />
      </Grid>
    </Grid>
  );
}
