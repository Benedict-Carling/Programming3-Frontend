import Grid from "@material-ui/core/Grid";
import React, { useState, useContext } from "react";
import "./profile.css";
import PasswordChange from "./Components/PasswordChange";
import ImageDynamic from "../CovidStatsImg/ImageDynamic";
import UserContext from "../../context/UserContext";
/* function that renders the profile page
it includes the change password functionality from PasswordChange.js
*/
export default function Profile() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className="Profile">
      <Grid container spacing={2} padding="0px">
        <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <header className="Profile-MainTitle">
            <h1>Account details</h1>
          </header>
        </Grid>
        <Grid item xs={12}>
          <header className="Profile-Info">
            {/*accesses the account information of current user*/}
            <h1>EMAIL: {userData.user.email}</h1>
            <h1>ACCOUNT TYPE: {userData.user.type}</h1>
          </header>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordChange />
        </Grid>
        <Grid item xs={12} sm={5}>
          <ImageDynamic className="Image" />
        </Grid>
      </Grid>
    </div>
  );
}
