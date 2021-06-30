import React from "react";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class MainPage extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.state = {backgroundColor: 'blue'};
  // }

  render() {
    return (

      <Paper elevation="2">
        <Typography variant="h2">
          This is the main page!
        </Typography>
      </Paper>
    );
  }
}

export default MainPage;
