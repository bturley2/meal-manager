import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Sidebar extends React.Component {

  render() {
    return (
        <Drawer 
          variant="persistent"
          open="true"
        >
          <List>
            <Divider />
            <ListItem button key="Dashboard">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />

            <ListItem button key="Enter a Meal">
              <ListItemText primary="Enter a Meal" />
            </ListItem>
            <Divider />

            <ListItem button key="Meal Lookup">
              <ListItemText primary="Meal Lookup" />
            </ListItem>
            <Divider />

            <ListItem button key="Shopping List">
              <ListItemText primary="Shopping List" />
            </ListItem>
            <Divider />

            <ListItem button key="Weekly Meal Planner">
              <ListItemText primary="Weekly Meal Planner" />
            </ListItem>
            <Divider />

            <ListItem button key="Meal Calendar">
              <ListItemText primary="Meal Calendar" />
            </ListItem>
            <Divider />

            <ListItem button key="Recommend Meals">
              <ListItemText primary="Recommend Meals" />
            </ListItem>
            <Divider />

          </List>
        </Drawer>
    );
  }
}

export default Sidebar;
