import React, { useContext } from "react";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Axios from "axios";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import UserContext from "../../../context/UserContext";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "accountType", headerName: "Account Type", width: 200 },
];

let selectedArray = [];

function selectedRow(row) {
  selectedArray = row;
  console.log(row);
  console.log(row.data.id);
  console.log(row.data.email);
  console.log(selectedArray);
  return { selectedArray };
}

function process(entry) {
  return {
    id: entry._id,
    email: entry.email,
    accountType: entry.accountType,
  };
}

export default function DataTable() {
  const [state, setstate] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [numSelected, setNumSelected] = useState(0);
  const [errMes, setErrMes] = useState("");
  const { userData, setUserData } = useContext(UserContext);

  function selectedRowChange(selectedChange) {
    console.log(selectedChange);
    setNumSelected(selectedChange.rowIds.length);
    console.log(numSelected);
  }

  React.useEffect(() => {
    (async () => {
      const loginRes = await Axios.get("http://localhost:5000/users/allusers");
      var processed = loginRes.data.map(process);
      setstate(processed);
    })();
  }, [refreshTable]);

  const DeleteFunc = async (e) => {
    e.preventDefault();
    if (numSelected > 1) {
      setErrMes("Please only delete one account at a time.");
      return;
    } else {
      setErrMes("");
    }
    const config = {
      headers: { "x-auth-token": userData.token },
    };

    const UserDeleteId = {
      accountIDToDelete: selectedArray.data.id,
    };

    console.log(selectedArray.data.id);

    console.log(UserDeleteId);

    await Axios.post(
      `http://localhost:5000/users/delete`,
      UserDeleteId,
      config
    ).then((res) => {
      console.log(res);
      console.log(res.data);
      setRefreshTable((C) => !C);
    });
  };

  return (
    <div style={{ height: "650px", width: "100%" }}>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item>
          {errMes}
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={DeleteFunc}
          >
            DELETE
          </Button>
        </Grid>
      </Grid>

      <DataGrid
        rows={state}
        columns={columns}
        pageSize={10}
        checkboxSelection
        selecter
        onRowSelected={(selected) => {
          selectedRow(selected);
        }}
        onSelectionChange={(selectedChange) => {
          selectedRowChange(selectedChange);
        }}
      />
    </div>
  );
}
