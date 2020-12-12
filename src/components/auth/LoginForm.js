import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import "./Login.css";
import {Grid} from '@material-ui/core';
import PasswordButton from './PasswordButton';
import Button from "@material-ui/core/Button";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

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
        history.push("/home");
    };

    return(
        <Grid container spacing={2} width='100%' margin='5px'>
            <Grid item xs={12} md={12} padding='5px'>
                <form onSubmit={submit}>
                    <label className="Label" htmlFor="login-email">
                        Email
                    </label>

                    <input className="Textfield"
                        onChange={(e) => setEmail(e.target.value)}
                        id="login-email"
                        type="email"
                    />
            
                    <label className="Label" htmlFor="login-password">
                        Password
                    </label>
            
                    <input className="Textfield"
                        onChange={(e) => setPassword(e.target.value)}
                        id="login-password"
                        type="password"
                    /> 
                </form>
            </Grid>

            <Grid item xs={1} md={1} padding='5px'>
            </Grid>

            <Grid item xs={5} md={5} padding='5px'>
                <Button variant="contained" color="secondary" type="submit" onClick={submit}>
                   LOGIN
                </Button>
            </Grid>
             
            <Grid item xs={5} md={5} >
                <PasswordButton/>
            </Grid>
           
        </Grid>
    );
}
