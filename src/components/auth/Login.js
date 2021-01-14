import React from "react";
import "./Login.css";
import { Grid } from "@material-ui/core";
import ImageDynamic from "../CovidStatsImg/ImageDynamic";
import LoginForm from "../LoginComponents/LoginForm";

/* Funtion to render the Login Page with the following components:
      - LoginForm
      - ImageDynamic
*/
export default function Login() {
  return (
    <div className="Login">
      <Grid container spacing={5} padding="5px">
        <Grid item xs={12}>
          <h1 className="MainTitle">Welcome to REACT 2</h1>
        </Grid>

        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>

        <Grid item xs={12} md={6}>
          <ImageDynamic />
        </Grid>
      </Grid>
    </div>
  );
}
