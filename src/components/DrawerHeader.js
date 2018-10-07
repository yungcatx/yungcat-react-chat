import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  drawerContainer: {
    gridArea: "drawerHeader",
  },
  drawerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
  },
});

const DrawerHeader = ({classes}) => (
  <div className={classes.drawerContainer}>
  <div className={classes.drawerHeader}>
    <TextField
      fullWidth
      margin="normal"
      placeholder="Search chats..."
    />
    <div>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <AddIcon />
      </IconButton>
    </div>
    <Divider/>
  </div>
  </div>

);

export default withStyles(styles)(DrawerHeader)
