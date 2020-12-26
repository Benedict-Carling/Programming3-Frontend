import React, { useState } from "react";
import SimpleTabs from "../../components/layout/resolvedTab";

import MainTable from "../../components/layout/CollapsibleTable";
import SearchBar from "../../components/Table/SearchBar";


import EditTable from "../Table/EditTable";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

export default function Data() {
  const [selectedID, setSelectedID] = useState("");
  const [selectedFlag, setFlag] = useState("");
  const [expertComment, setExpertComment] = useState("");
  const [expertInterpretation, setExpertInterpretation] = useState("");
  const [buttonclicked, setButtonclicked] = useState(false);
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
          <SearchBar/>
          <SimpleTabs
            setSelectedID={setSelectedID}
            setFlag = {setFlag}
            buttonclicked={buttonclicked}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card type="outlined"></Card>
        <EditTable
          selectedID={selectedID}
          selectedFlag={selectedFlag}
          setExpertComment={setExpertComment}
          expertComment={expertComment}
          expertInterpretation={expertInterpretation}
          setExpertInterpretation={setExpertInterpretation}
          setButtonclicked={setButtonclicked}
        />
      </Grid>
    </Grid>
  );
}