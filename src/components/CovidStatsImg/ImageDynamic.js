import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import covidStats from "./covidStats.png";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
  },
  imagePosition: {
    textAlign: "centre",
  },
  responsiveImage: {
    textAlign: "right",

    [theme.breakpoints.up("xs")]: {
      height: "200px",
      maxHeight: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "216px",
      maxHeight: "216px",
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
      maxHeight: "300px",
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