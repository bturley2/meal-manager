// import '../style/Navbar.css';
import React from "react";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';



class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   isOpen: true,
    // };
  // }

  render() {
    return (
      // <Grid container direction="row" justify="center" >
      //   <Container>Hello</Container>
      // </Grid>

      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">Dashboard</Typography>

        </Toolbar>
      </AppBar>

    );
  }
}

export default Navbar;
