import React from "react";
import Register from "../AccountManagement/Register";
import DeleteUsers from "../AccountManagement/DeleteUsers";
import {Tabs, Tab, AppBar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SearchBar from "../../components/Table/SearchBar";

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
        <Box p={0}>
          <Typography>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default function AccountManagement(props) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Tabs value={selectedTab} onChange={handleChange} >

          <Tab label="Register New Account" >
          </Tab>

          <Tab label="Manage Accounts">
          </Tab>

        </Tabs>
      </AppBar>

      <TabPanel value={selectedTab} index={0}>
        <Register/>
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <SearchBar/>
        <DeleteUsers />
      </TabPanel>

    </div>
  );
}

