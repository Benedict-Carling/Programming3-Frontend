import React from "react";
import Grid from "@material-ui/core/Grid";

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
      <Grid item xs={12} sm={4}>
        HI
      </Grid>
      <Grid item xs={12} sm={4}>
        Hello
      </Grid>
      <Grid item xs={12} sm={4}>
        howdy
      </Grid>
    </Grid>
  );
}
