import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#043c74",
  },
  menuButton: {
    color: "white",
    marginRight: theme.spacing(2),
  },
  title: {
    color: "white",
    flexGrow: 1,
    textAlign: "left",
    padding: "10",
  },
  navbartext: {
    color: "white",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
  };

  try {
    if (userData.user.type === "webmaster")
      return (
        <div className={classes.root}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <Link to="/">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <img
                    src={process.env.PUBLIC_URL + "icl.png"}
                    height="50"
                    alt="logo"
                  />
                </IconButton>
              </Link>
              <Link style={navStyle} to="/data">
                <Button>
                  <Typography className={classes.navbartext}>
                    Resolve Issues
                  </Typography>
                </Button>
              </Link>
              <Typography variant="h6" className={classes.title}>
                Account Type: {userData.user.type}
              </Typography>
              <Link style={navStyle} to="/home">
                <Button>
                  <Typography className={classes.navbartext}>
                    Home
                  </Typography>
                </Button>
              </Link>
              <Link style={navStyle} to="/accountmanagement">
                <Button>
                  <Typography className={classes.navbartext}>
                    Account Management
                  </Typography>
                </Button>
              </Link>
              <Button onClick={logout}>
                <Typography className={classes.navbartext}>
                  Logout
                </Typography>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      );

    if (userData.user.type)
      return (
        <div className={classes.root}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <Link to="/">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <img
                    src={process.env.PUBLIC_URL + "icl.png"}
                    height="50"
                    alt="logo"
                  />
                </IconButton>
              </Link>
              <Typography variant="h6" className={classes.title}>
                React2 - Resolve discrepancies
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Account Type: {userData.user.type}
              </Typography>
              <Link style={navStyle} to="/">
                <Button>
                  <Typography className={classes.navbartext}>
                    Home
                  </Typography>
                </Button>
              </Link>
              <Button onClick={logout}>
                <Typography className={classes.navbartext}>
                  Logout
                </Typography>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      );
  } catch {
    return <></>;
  }
}
