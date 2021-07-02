import React from "react";

import MainPage from './MainPage';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
      <Toolbar>

        <FastFoodIcon />
        <Box m={1} />
        <Typography variant="h6">Meal Manager</Typography>

        <Box m={2} />

        <Tabs>
          <Tab label="My Week" />
          <Tab label="Meal Search" />
          <Tab label="Upload Recipe" disabled />
        </Tabs>


      </Toolbar>
    </AppBar>

    <MainPage />


    </div>
    
  );
}
