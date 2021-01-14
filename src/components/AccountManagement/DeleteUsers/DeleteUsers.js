import React, { useContext } from "react";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Axios from "axios";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import UserContext from "../../../context/UserContext";

// Structure of the User's data
const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "accountType", headerName: "Account Type", width: 200 },
];

// Global variable of the User selected
let selectedArray = [];

// Function to confirm the selected row
function selectedRow(row) {
  selectedArray = row;
  console.log(row);
  console.log(row.data.id);
  console.log(row.data.email);
  console.log(selectedArray);
  return { selectedArray };
}

// Function to hide unnecessary attributes of entry 
function process(entry) {
  return {
    id: entry._id,
    email: entry.email,
    accountType: entry.accountType,
  };
}

/* Function to render the Delete Users tab in the Account Management page 
*/
export default function DataTable() {

  // Variables that may change throughout the function process
  const [state, setstate] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);
  const [numSelected, setNumSelected] = useState(0);
  const [errMes, setErrMes] = useState("");
  const { userData, setUserData } = useContext(UserContext);

  // Function to obtain the length of selectedChange
  function selectedRowChange(selectedChange) {
    console.log(selectedChange);
    setNumSelected(selectedChange.rowIds.length);
    console.log(numSelected);
  }

  // Function to get the data from the Users database
  React.useEffect(() => {
    (async () => {
      const loginRes = await Axios.get("http://localhost:5000/users/allusers");
      var processed = loginRes.data.map(process);
      setstate(processed);
    })();
  }, [refreshTable]);

  // Function to delete a user at a time from the users database
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


