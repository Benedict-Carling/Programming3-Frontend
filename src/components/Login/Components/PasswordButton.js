import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ForgotPassword from "./ForgotPassword";

/* Function to render the Forgot Password button and its functionalities 
that have been specified in the ForgotPassword function
*/
export default function PasswordButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleClickOpen}
      >
        FORGOT PASSWORD
      </Button>

      <ForgotPassword open={open} handleClose={handleClose} />
    </div>
  );
}
