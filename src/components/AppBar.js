import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  appBarContainer: {
    gridArea: "appbar"
  },
  appBar: {
    width: `calc(100% - 320px)`
  },
});

const ChatAppBar = ({classes}) => (
  <div className={classes.appBarContainer}>
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        Yungcat React Chat
      </Typography>
    </Toolbar>
  </AppBar>
  </div>
);

export default withStyles(styles)(ChatAppBar)
