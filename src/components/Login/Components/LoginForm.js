import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import Axios from "axios";
import "../auth/Login.css";
import { Grid } from "@material-ui/core";
import PasswordButton from "./PasswordButton";
import Button from "@material-ui/core/Button";
import ErrorAlert from "../../AccountManagement/Register/Components/ErrorAlert.js";
import { ApiEndpoint } from "../../../index";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [openErrorMessage, setOpenErrorMessage] = useState(false);

  const { setUserData } = useContext(UserContext) || "";
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const logInUser = { email, password };
    try {
      const loginRes = await Axios.post(ApiEndpoint + "users/login", logInUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      history.push("/home");
    } catch (error) {
      setOpenErrorMessage(true);
      setErrorMessage(error.response.data.msg); // we get the error message from the post request made in the backend
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

      <Grid item xs={1} md={1} padding="5px">
      </Grid>

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
