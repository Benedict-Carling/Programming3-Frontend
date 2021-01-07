import React, { useState, useEffect } from "react";
import Axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import MUIDataTable from "mui-datatables";

export default function GetTable(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "U_PASSCODE", headerName: "U_PASSCODE", width: 150 },
    { field: "Flag", headerName: "Flag", width: 150 },
    {
      field: "UserInterpretation",
      headername: "User Interpretation",
      width: 200,
    },
    {
      field: "AlgorithmInterpretation",
      headername: "Algorithm Interpretation",
      width: 200,
    },
    {
      field: "ExpertInterpretation",
      headername: "Expert Interpretation",
      width: 200,
    },
    { field: "ExpertComment", headername: " Expert Comment", width: 200 },
    //{ field: "ImagePath", headername: "Image Path", width: 200 },
  ];
  const [table, settable] = useState([]);

  function selectedRow(row) {
    props.setSelectedID(row.data.id);
    props.setFlag(row.data.Flag);
    console.log(row.data.id);
  }

  function process(entry) {
    return {
      U_PASSCODE: entry.U_PASSCODE,
      id: entry.Id,
      Flag: entry.Flag,
      UserInterpretation: entry.UserInterpretation,
      AlgorithmInterpretation: entry.AlgorithmInterpretation,
      ExpertInterpretation: entry.ExpertInterpretation,
      ExpertComment: entry.ExpertComment,
      ImagePath: entry.ImagePath,
    };
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(`http://localhost:5000/data/table`);
      var body = result.data.map(process);
      settable(body);
    };
    fetchData();
  }, [props.buttonclicked]);

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
