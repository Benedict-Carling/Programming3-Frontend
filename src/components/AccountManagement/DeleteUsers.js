import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "accountType", headerName: "Account Type", width: 200 },
];

function selectedRow(row) {
  console.log(row);
  console.log("hi");
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

  React.useEffect(() => {
    (async () => {
      const loginRes = await Axios.get("http://localhost:5000/users/allusers");
      var processed = loginRes.data.map(process);
      setstate(processed);
    })();
  }, []);

  return (
    <div style={{ height: "800px", width: "100%" }}>
      <DataGrid
        rows={state}
        columns={columns}
        pageSize={15}
        checkboxSelection
        onRowSelected={(row) => selectedRow(row)}
      />
    </div>
  );
}
