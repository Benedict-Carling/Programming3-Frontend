import React, { useState, useEffect } from "react";
import Axios from "axios";
import { DataGrid } from "@material-ui/data-grid";

export default function GetTable() {
    
const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "U_PASSCODE", headerName: "U_PASSCODE", width: 200 },
    { field: "Flag", headerName: "Flag", width: 200 },
    { field: "UserInterpretation", headername:"User Interpretation",width: 200},
    { field: "AlgorithmInterpretation", headername:"Algorithm Interpretation",width:200},
    { field: "ExpertInterpretation", headername:"Expert Interpretation", width:200},
    { field: " ExpertComment", headername:" Expert Comment", width:200},
    { field: "ImagePath", headername:"Image Path", width: 200}
    
  ];
    const [table,settable] = useState([])
    //{U_PASSCODE:"",Id:"",Date:"",Flag:"","User interpretation":"","Exert interpretation":"","Expert comment":"","Image path":""}
    function process(entry) {
        return {
          U_PASSCODE: entry.U_PASSCODE,
          id: entry.Id,
          Flag: entry.Flag,
          UserInterpretation: entry.UserInterpretation,
          AlgorithmInterpretation: entry.AlgorithmInterpretation,
          ExpertInterpretation: entry.ExpertInterpretation,
          ExpertComment: entry.ExpertComment,
          ImagePath: entry.ImagePath
        };
      }
    useEffect(() =>{
        const fetchData = async () => {
            const result= await Axios.get(`http://localhost:5000/data/table`)
            var body = result.data.map(process)
            console.log(body)
            settable(body);
        }
        fetchData();
        
    }, []);
    var ent = table[2];
    console.log('table',ent)

    return (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={table} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );

}