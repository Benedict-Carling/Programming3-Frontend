import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(
  U_PASSCODE,
  Id,
  Date,
  Flag,
  UserInt,
  AlgoInt,
  ExpInt,
  ExpCom,
  ImgPath
) {
  return {
    U_PASSCODE,
    Id,
    Date,
    Flag,
    UserInt,
    AlgoInt,
    ExpInt,
    ExpCom,
    ImgPath,
    ChangeHistory: [
      { date: "2020-01-05", Id: "11091700", amount: 3 },
      { date: "2020-01-02", Id: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.U_PASSCODE}</TableCell>
        <TableCell align="left">{row.Id}</TableCell>
        <TableCell align="left">{row.Date}</TableCell>
        <TableCell align="left">{row.Flag}</TableCell>
        <TableCell align="left">{row.UserInt}</TableCell>
        <TableCell align="left">{row.AlgoInt}</TableCell>
        <TableCell align="left">{row.ExpInt}</TableCell>
        <TableCell align="left">{row.ExpCom}</TableCell>
        <TableCell align="left">{row.ImgPath}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Change History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell align="left">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ChangeHistory.map((historyRow) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.Id}</TableCell>
                      <TableCell align="left">{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    U_PASSCODE: PropTypes.string.isRequired,
    Id: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,
    Flag: PropTypes.string.isRequired,
    UserInt: PropTypes.string.isRequired,
    AlgoInt: PropTypes.string.isRequired,
    ExpInt: PropTypes.string.isRequired,
    ExpCom: PropTypes.string.isRequired,
    ImgPath: PropTypes.string.isRequired,
    ChangeHistory: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        Id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "AB12",
    0,
    "2016-08-07",
    "Corrupt",
    "-",
    "-",
    "",
    "",
    "../../someImages"
  ),
  //createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  //createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  //createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  //createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">U_PASSCODE</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Flag</TableCell>
            <TableCell align="left">User Interpretation</TableCell>
            <TableCell align="left">Algorithm Interpretation</TableCell>
            <TableCell align="left">Expert Interpretation</TableCell>
            <TableCell align="left">Expert Comment</TableCell>
            <TableCell align="left">Image Path</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.U_PASSCODE} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
