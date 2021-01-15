import React, { useState, useEffect } from "react";
import Axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import { ApiEndpoint } from "../../..";

/* Function to get the discrepancies data from the main databse
 */
export default function GetTable(props) {
  // Variables that change through the function process
  const [responsive, setResponsive] = useState("standard");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [table, settable] = useState([]);

  // Styling function
  const customTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableHeadCell: {
          root: {
            "&:nth-child(1)": {
              width: 30,
            },
            "&:nth-child(2)": {
              width: 70,
            },
            "&:nth-child(3)": {
              width: 70,
            },
            "&:nth-child(4)": {
              width: 70,
            },
            "&:nth-child(5)": {
              width: 70,
            },
            "&:nth-child(6)": {
              width: 70,
            },
            "&:nth-child(7)": {
              width: 70,
            },
            "&:nth-child(8)": {
              width: 70,
            },
            "&:nth-child(9)": {
              width: 70,
            },
          },
        },
      },
    });

  // Creating the column structure
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "U_PASSCODE",
      label: "U_PASSCODE",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Date",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Flag",
      label: "Flag",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "UserInterpretation",
      label: "User Interpretation",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "AlgorithmInterpretation",
      label: "Algorithm Interpretation",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "ExpertInterpretation",
      label: "Expert Interpretation",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "ExpertComment",
      label: "Expert Comment",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  // Function to assign the attibutes of row to different variables
  function selectedRow(row) {
    props.setSelectedID(row[0]);
    props.setU_PASSCODE(row[2]);
    props.setFlag(row[3]);
  }

  // List of properties
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    selectableRows: false,
    download: false,
    print: false,
    rowsPerPageOptions: [5, 10, 15],
    onRowClick: (row, index) => {
      selectedRow(row);
    },
  };

  // Function to process the data obtain from the get request
  function process(entry) {
    return {
      U_PASSCODE: entry.U_PASSCODE,
      id: entry.Id,
      Date: entry.Date,
      Flag: entry.Flag,
      UserInterpretation: entry.UserInterpretation,
      AlgorithmInterpretation: entry.AlgorithmInterpretation,
      ExpertInterpretation: entry.ExpertInterpretation,
      ExpertComment: entry.ExpertComment,
      ImagePath: entry.ImagePath,
    };
  }

  // Get request function to obtain the list of discrepancies of the main database
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(ApiEndpoint + `data/table`);
      var body = result.data.map(process);
      body.forEach((element) => {
        element.id = Number.parseInt(element.id);
      });
      body.sort(function (a, b) {
        return a.id - b.id;
      });
      body = body.filter((element) => element.ExpertInterpretation === "");
      settable(body);
    };
    fetchData();
  }, [props.buttonclicked]);

  return (
    <MuiThemeProvider theme={customTheme()}>
      <MUIDataTable data={table} columns={columns} options={options} />
    </MuiThemeProvider>
  );
}
