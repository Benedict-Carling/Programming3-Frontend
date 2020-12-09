import React from 'react'
import GetTable from "../../components/Table/getTable";
import NavBar from "../../components/layout/NavBar";
import SimpleTabs from "../../components/layout/resolvedTab";
import MainTable from "../../components/layout/CollapsibleTable";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";


export default function Data() {
    return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      padding={6}
      spacing={2}
    >
      <Grid item xs={12} sm={9}>
        <Card type="outlined">
          <SimpleTabs />
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card type="outlined">
          
        </Card>
      </Grid>
    </Grid>
    )
}