import React from "react";
import ImageDynamic from "../CovidStatsImg/ImageDynamic";
import "./home.css";
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
            <Grid item xs={12} style={{paddingTop: 0, paddingBottom: 0}}>
                 <header className="Home-MainTitle">
                    <h1>
                      REACT 2
                    </h1>
                </header>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h1 className="Home-header">
                Choose the round of tests you would like to have a look at:
              </h1>
            </Grid>
            
            <Grid item xs={12} sm={6} style={{marginLeft: 50}}>
              <List component="nav" className="Home-Rounds" >
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

            <Grid item xs={12} sm={5}>
                <ImageDynamic className="Home-picture" />
            </Grid>
        </Grid>
      </div>  
    );
}