import React, { useState } from "react";
import GetTable from "../../components/Table/getTable";
import NavBar from "../../components/layout/NavBar";
import SimpleTabs from "../../components/layout/resolvedTab";
import MainTable from "../../components/layout/CollapsibleTable";

import EditTable from "../Table/EditTable";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

export default function Data() {
  const [selectedID, setSelectedID] = useState("");
  const [expertComment, setExpertComment] = useState("");
  const [expertInterpretation, setExpertInterpretation] = useState("");
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
          <SimpleTabs setSelectedID={setSelectedID} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card type="outlined"></Card>
        <EditTable
          selectedID={selectedID}
          setExpertComment={setExpertComment}
          expertComment={expertComment}
          expertInterpretation={expertInterpretation}
          setExpertInterpretation={setExpertInterpretation}
        />
      </Grid>
    </Grid>
  );
}
