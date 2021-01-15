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

/* Function to render the navigation bar on the top of the website depending on the account type 
*/

// Styling function
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

// Navigation function
export default function NavBar() {

  // Styling propertities
  const classes = useStyles();
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  // Variables that vary through the function process
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  // Function to log out 
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/");
  };

  // Depending on the user account (webmaster, editor, reviewer) the navigation bar would display different options correpsponing to each users functionalities
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
                    Review Discrepancies
                  </Typography>
                </Button>
              </Link>

              <Typography className={classes.title}>
                Account Type: {userData.user.type}
              </Typography>

              <Link style={navStyle} to="/home">
                <Button>
                  <Typography className={classes.navbartext}>Home</Typography>
                </Button>
              </Link>

              <Link style={navStyle} to="/accountmanagement">
                <Button>
                  <Typography className={classes.navbartext}>
                    Account Management
                  </Typography>
                </Button>
              </Link>

              <Link style={navStyle} to="/logs">
                <Button>
                  <Typography className={classes.navbartext}>Logs</Typography>
                </Button>
              </Link>

              <Link style={navStyle} to="/profile">
                <Button>
                  <Typography className={classes.navbartext}>
                    Profile
                  </Typography>
                </Button>
              </Link>

              <Button onClick={logout}>
                <Typography className={classes.navbartext}>Logout</Typography>
              </Button>

            </Toolbar>
          </AppBar>
        </div>
      );

    if (userData.user.type === "editor")
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
                Review discrepancies
              </Typography>

              <Typography variant="h6" className={classes.title}>
                Account Type: {userData.user.type}
              </Typography>

              <Link style={navStyle} to="/">
                <Button>
                  <Typography className={classes.navbartext}>Home</Typography>
                </Button>
              </Link>

              <Link style={navStyle} to="/profile">
                {" "}
                {/* icon that takes the user to their profile page */}
                <Button>
                  <Typography className={classes.navbartext}>
                    Profile
                  </Typography>
                </Button>
              </Link>

              <Button onClick={logout}>
                <Typography className={classes.navbartext}>Logout</Typography>
              </Button>

            </Toolbar>
          </AppBar>
        </div>
      );

    if (userData.user.type === "reviewer")
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
                Review discrepancies
              </Typography>

              <Typography variant="h6" className={classes.title}>
                Account Type: {userData.user.type}
              </Typography>

              <Link style={navStyle} to="/">
                <Button>
                  <Typography className={classes.navbartext}>Home</Typography>
                </Button>
              </Link>

              <Link style={navStyle} to="/logs">
                <Button>
                  <Typography className={classes.navbartext}>Logs</Typography>
                </Button>
              </Link>

              <Link style={navStyle} to="/profile">
                {" "}
                {/* icon that takes the user to their profile page */}
                <Button>
                  <Typography className={classes.navbartext}>
                    Profile
                  </Typography>
                </Button>
              </Link>

              <Button onClick={logout}>
                <Typography className={classes.navbartext}>Logout</Typography>
              </Button>
              
            </Toolbar>
          </AppBar>
        </div>
      );
  } catch {
    return <></>;
  }
}
