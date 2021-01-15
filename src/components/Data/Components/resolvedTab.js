import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GetTable from "../Table/getTable";
import ResolvedTable from "../../Data/Table/resolvedTable";

/* Function to render the tab panel of the unresolved and resolved discrepancies
 */

// Function to create a tab panel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

// Final function exported for the tab panel
export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Select a tab">
          <Tab label="Unresolved Discrepancies" {...a11yProps(0)} />
          <Tab label="Resolved Discrepancies" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <GetTable
          setU_PASSCODE={props.setU_PASSCODE}
          setSelectedID={props.setSelectedID}
          setFlag={props.setFlag}
          buttonclicked={props.buttonclicked}
        />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ResolvedTable
          setSelectedID={props.setSelectedID}
          setFlag={props.setFlag}
          buttonclicked={props.buttonclicked}
        />
      </TabPanel>
    </div>
  );
}
