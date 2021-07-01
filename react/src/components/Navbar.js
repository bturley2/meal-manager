import React from "react";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../style/Styles';

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.mainPage} position="static">
      <Toolbar>

        <IconButton edge="start">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">Dashboard</Typography>

      </Toolbar>
    </AppBar>
  );
}
