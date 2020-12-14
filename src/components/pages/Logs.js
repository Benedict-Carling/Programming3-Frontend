import React, { useState, useEffect } from "react";
import EditTable from "../Table/EditTable";
import Axios from "axios"
import { DataGrid } from "@material-ui/data-grid";



export default function Logs() {
    const columns = [
        { field: "Email", headerName: "Email", width: 100 },
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
        console.log(row);
        console.log("hi");
    }

    useEffect(() => {
        const fetchData = async () => {
          const result = await Axios.get(`http://localhost:5000/log/table`);
          var body = result.data.map(process);
          settable(body);
        };
        fetchData();
    }, []);



    function process(entry) {
        return {
            Email : entry.Email,
            accountType : entry.accountType,
            LogDate : entry.LogDate,
            id : entry.testId,
            ExpertInterpretation : entry.ExpertInterpretation,
            ExpertComment : entry.ExpertComment,
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