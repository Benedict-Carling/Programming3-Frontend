import React from "react";
import "./Register.css";
import { Grid } from "@material-ui/core";
import ImageDynamic from "../CovidStatsImg/ImageDynamic";
import RegisterForm from "./RegisterForm";
/* Function that renders the registration page
It includes RegisterForm.js that contains all the functionality
*/
export default function Register() {
  return (
    <div className="Register">
      <Grid container spacing={2} padding="5px">
        <Grid item xs={12}>
          <h1 className="Register-MainTitle">Register a new account:</h1>
        </Grid>

        <Grid item xs={12} md={5}>
          <RegisterForm />
        </Grid>

        <Grid item xs={12} md={5}>
          <ImageDynamic className="Image" />
        </Grid>
      </Grid>
    </div>
  );
}
