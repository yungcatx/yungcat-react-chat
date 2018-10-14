import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ChatIcon from '@material-ui/icons/Chat';
import {Link} from 'react-router-dom';


const styles = theme => ({
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '10px',
    alignItems: 'center',
    alignContent: 'space-between',
  },
});


const SimpleHeader = ({classes}) => (

  <AppBar position="static" color="primary" className={classes.headerLayout}>
    <Icon>
      <ChatIcon />
    </Icon>
    <Toolbar>
      <Typography variant="title" color="inherit">
        Yungcat React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(SimpleHeader)
