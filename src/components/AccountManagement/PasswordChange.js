import React, { useState, useContext } from "react";
import "../pages/profile.css";
import Button from "@material-ui/core/Button";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

import UserContext from "../../context/UserContext";
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';


export default function PasswordChange() {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
    const [openErrorMessage, setOpenErrorMessage] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");

    const { userData, setUserData } = useContext(UserContext); 



  const submit = async (e) => {
    e.preventDefault();
   
   await Axios.post(
    "http://localhost:5000/users/changePassword"
   )
    .then(response=> {
      console.log(response);
      setOpenSuccessMessage(true);
    })
    .catch(error=> {
      setOpenErrorMessage(true);
      setErrorMessage(error.response.data.msg); // we get the error message from the post request made in the backend
    })
    
  };
    function validateForm() {
        // makes sure that there are no empty fields when you submit a registration
        return (
          password.length > 0 &&
          passwordCheck.length > 0 
        );
      }
return(
    <div>
        <form>
            <h1 className="Profile-header">
                Change  password:
            </h1>
            <label className="Profile-password">
                <h1 htmlFor="register-password">New Password:</h1>
            </label>

            <input
                className="Textfield"
                
                id="register-password"
                type="password"
            />

            <label className="Profile-passwordCheck">
                <h1 htmlFor="register-passwordCheck">Password verification</h1>
            </label>

            <input
                className="Textfield"
                
                id="register-passwordCheck"
                type="password"
                placeholder="Verify password"
            />
             <Button
                onClick={submit}
                variant="contained"
                color="secondary"
                type="submit"
                value="Register"
                disabled={!validateForm()} // disables the button unless all the conditions stated in the function validateForm() are met
                >
                Change Password
             </Button>
             
            </form>
            <Grid className="Alert" item xs={5} sm ={5} md={7} lg={12} >
                <SuccessAlert setOpen={setOpenSuccessMessage} open={openSuccessMessage} />
                <ErrorAlert setOpen={setOpenErrorMessage} open={openErrorMessage} Error ={ErrorMessage} />
            </Grid>
            </div>

);
}