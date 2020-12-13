import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import covidStats from "./covidStats.png";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  imagePosition: {
    textAlign: "center",
  },
  responsiveImage: {
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      height: "200px",
      maxHeight: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "300px",
      maxHeight: "300px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
      maxHeight: "400px",
    },
  },
}));

export default function HomeImage(props) {
  const classes = useStyles();

  return (
    <div className={classes.responsiveImage}>
      <img src={covidStats}className={classes.responsiveImage} alt="covidStats" />
    </div>
  );
}