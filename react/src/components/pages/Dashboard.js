import React from "react";

import Paper from '@material-ui/core/Paper';
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

export default function Dashboard() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation="2">
      <Typography variant="h2">
        This is the main page!
      </Typography>
    </Paper>
  );
}