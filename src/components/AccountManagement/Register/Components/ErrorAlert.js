import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
/* Function that makes an error alert appear when a process is unsuccessful
we use props (React property used to pass data from one component to the other) to pass the error message 
to other functions.
*/
const useStyles = makeStyles((theme) => ({ //styling of the alert
  root: {
    right: 0,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={props.open}>
        <Alert
          severity="error"
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
          } // Error message that is obtained using props
        >
          {props.Error}  
        </Alert>
      </Collapse>
    </div>
  );
}
