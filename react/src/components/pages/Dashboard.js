import React from "react";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../style/Styles';


export default function Dashboard() {
  const classes = useStyles();
  return (
    <Paper className={classes.mainPage} elevation="2">
      <Typography variant="h2">
        This is the main page!
      </Typography>
    </Paper>
  );
}