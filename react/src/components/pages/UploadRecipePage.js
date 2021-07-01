import React from "react";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class UploadRecipePage extends React.Component {
  render() {
    return (
      <Paper elevation="2">
        <Typography variant="h2">
          Upload a recipe here!
        </Typography>
      </Paper>
    );
  }
}

export default UploadRecipePage;
