import React from "react";
import "./Login.css";
import { Grid } from "@material-ui/core";
import ImageDynamic from './ImageDynamic';
import LoginForm from './LoginForm';

export default function Login() {

  return (
    <div className='Login'> 
      <Grid container spacing={5} padding='5px' >

        <Grid item xs={12}>
          <h1 className="MainTitle">
            Welcome to REACT 2
          </h1>
        </Grid>

        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>

        <Grid item xs={12} md={6}>
          <ImageDynamic/>
        </Grid>
      </Grid>
    </div>
  );
}