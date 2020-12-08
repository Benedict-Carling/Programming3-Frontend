import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const submit = async (e) => {
    e.preventDefault();
    const logInUser = { email, password };
    const loginRes = await Axios.post(
      "http://localhost:5000/users/login",
      logInUser
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" type= "submit">
        Login
      </Button>
    </div>
  );
}