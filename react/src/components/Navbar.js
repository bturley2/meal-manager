import React, { useState } from "react";

import MyWeekPage from "./pages/MyWeekPage";
import UploadRecipePage from "./pages/UploadRecipePage";

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Navbar() {
  // useStaate lets us store information in functions (it returns 2 values)
  const [activeTab, setActiveTab] = useState(0);
  
  // adding an event listener to handleChange and giving it an event handler (here, changes the tabs value)
    // event is the event that happened (onClick/onChange, etc)
    // it holds lots of other information about the type of event
    // event.target is the actual HTML element that triggered the event
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
      <Toolbar>

        <FastFoodIcon />
        <Box m={1} />
        <Typography variant="h6">Meal Manager</Typography>
        <Box m={2} />

        <Tabs value={activeTab} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="My Week"  />
          <Tab label="Meal Search" />
          <Tab label="Upload A Recipe" />
        </Tabs>
      </Toolbar>
    </AppBar>

    {activeTab === 0 && <div value={activeTab}>
      <MyWeekPage />
    </div>}
    {activeTab === 1 && <div value={activeTab}>
      <UploadRecipePage />
    </div>}
    {activeTab === 2 && <div value={activeTab}>
      Item Three
    </div>}

    </div>
  );
}

