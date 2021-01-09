import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Emailsender from './Emailsender';

export default function ForgotPassword(props) {
  
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Forgot your password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you have forgotten your password, email your supervisor. By clicking on 'SEND EMAIL', 
            your preferred mail application would automatically open.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            CANCEL
          </Button>

          <Emailsender email="supervisor@email.com" subject="Forgot Password" body="Please could you reset my account?">
          </Emailsender>
        </DialogActions>
      </Dialog>
    </div>
  );
}