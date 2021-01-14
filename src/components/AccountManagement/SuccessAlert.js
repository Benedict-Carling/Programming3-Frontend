import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
/* Function that makes a success alert appear when a process is successful
we use props (React property used to pass data from one component to the other) to pass the success message 
to other functions.
*/
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      right: 0,
    },
  },
}));

export default function SimpleAlerts(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={props.open}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          } // Success message that is obtained using props
        >
          {props.Message}
        </Alert>
      </Collapse>
    </div>
  );
}
