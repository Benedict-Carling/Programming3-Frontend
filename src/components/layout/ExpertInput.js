import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

export default function ExpertInput() {
    return (
      <Grid
        container
        direction="col"
        justify="center"
        alignItems="stretch"
        padding={6}
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Card type="outlined">
            
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card type="outlined">
           
          </Card>
        </Grid>
      </Grid>
    );
  }