import React, { useState, useEffect } from "react";
import GetTable from '../Table/getTable'
import covidStats from "./covidStats.png";
import "./home.css";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";



export default function Home() {


return(
    <div className="Home">
        <Grid container spacing={2} padding='5px' >
            <Grid item xs={12} sm={9} style={{paddingTop: 0, paddingBottom: 0}}>
                 <header className="Home-MainTitle">
                    <h1 className="Home-title">REACT 2</h1>
                </header>
            </Grid>
            <Grid item xs={12} sm={9}>
                <img src={covidStats} className="Home-picture" alt="covidStats" />
            </Grid>
            <Grid item xs={12} sm={9}>
                 <header className="Home-header">
                    <h1 className="Home-title">Choose the round of tests you would like to have a look at:</h1>
                </header>
            </Grid>
            
            <Grid item xs={12} sm={9} style={{marginLeft: 50}}>
              <List component="nav" className="Home-Rounds" aria-label="mailbox folders">
                <Link style={{color:'inherit'}} to="/Data">
                <ListItem button >
                <ListItemText primary="Round 1" />  
                </ListItem>
                </Link>
                <Divider />
                <ListItem button divider>
                 <ListItemText primary="Round 2A" />
                </ListItem>
                 <ListItem button>
                 <ListItemText primary="Round 2B" />
                </ListItem>
                <Divider light />
                <ListItem button>
                 <ListItemText primary="Add new Round" />
                </ListItem>
              </List>
            </Grid>
      </Grid>
      </div>
        
    )

}