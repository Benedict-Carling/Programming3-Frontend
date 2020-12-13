
import React from "react";
import "./Register.css";
import { Grid } from "@material-ui/core";
import ImageDynamic from '../CovidStatsImg/ImageDynamic';
import RegisterForm from './RegisterForm'

export default function Register() {

  return (
    <div className= "Register">

      <header className="Register-MainTitle">
        <h1 className="Register-title">
          Register a new account:
        </h1>
      </header>

      <Grid container spacing={5} padding='5px' >
        <Grid item xs={12} md={6}>
          <RegisterForm/>
        </Grid>

        <Grid item xs={12} md={6}>
          <ImageDynamic className="Image"/>
        </Grid>
      </Grid>
      
    </div>
  );
}