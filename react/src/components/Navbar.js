import React from "react";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 200;
const useStyles = makeStyles({
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>

        <IconButton edge="start">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">Dashboard</Typography>

      </Toolbar>
    </AppBar>
  );
}
