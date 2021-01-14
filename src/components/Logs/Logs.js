import React, { useState, useEffect } from "react";
import Axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { ApiEndpoint } from "../../index";
/* Function that fetches the data from the logs database in MongoDB using a get request to the backEnd
 and returns this data in a table
*/
export default function Logs() {
  const columns = [
    // all the fields contained in the table rendered
    { field: "Email", headerName: "Email", width: 100 },
    { field: "U_PASSCODE", headerName: "U_PASSCODE", width: 200 },
    { field: "accountType", headerName: "Account Type", width: 150 },
    { field: "LogDate", headerName: "Date and Time", width: 400 },
    { field: "id", headerName: "Test ID", width: 200 },
    {
      field: "ExpertInterpretation",
      headername: "Expert Interpretation",
      width: 200,
    },
    { field: "ExpertComment", headername: " Expert Comment", width: 200 },
  ];

  const [table, settable] = useState([]);

  function selectedRow(row) {
    // registers the selection of a row
    console.log(row);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(ApiEndpoint + `log/table`); // get request to the backEnd
      var body = result.data.map(process);
      console.log(body);
      settable(body);
    };
    fetchData(); // fetches the data
  }, []);

  function process(entry) {
    return {
      // returns the account information of the expert and information of the data fields that were changes
      Email: entry.Email,
      U_PASSCODE: entry.U_PASSCODE,
      accountType: entry.accountType,
      LogDate: entry.LogDate,
      id: entry.testId,
      ExpertInterpretation: entry.ExpertInterpretation,
      ExpertComment: entry.ExpertComment,
    };
  }
  return (
    <div style={{ height: 440, width: "100%" }}>
      <DataGrid
        rows={table}
        columns={columns}
        pageSize={5}
        onRowSelected={(row) => selectedRow(row)}
      />
    </div>
  );
}
