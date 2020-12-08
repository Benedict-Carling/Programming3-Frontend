import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";


import Register from "../AccountManagement/Register";
import DeleteUsers from "../AccountManagement/DeleteUsers";

export default function AccountManagement(props) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      padding={6}
      spacing={2}
    >
      <Grid item xs={12} sm={6}>
        <Card type="outlined">
          <Register />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card type="outlined">
          <DeleteUsers />
        </Card>
      </Grid>
    </Grid>
  );
}
