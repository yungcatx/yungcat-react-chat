import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore'
import AddIcon from '@material-ui/icons/Add'

import {chats, messages} from './mock-data'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  ChatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll'
  },
  addButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 40
  },
  bottomNav: {
    position: 'absolute',
    bottom: '10px'
  },
  Layout: {

  },
});

class PermanentDrawer extends React.Component {
  render() {
    const {classes} = this.props;


    return (
      <div className={classes.root}>
        <div>

          <AppBar
            position="absolute"
            className={classes.appBar}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                React Chat
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >

            <div className={classes.drawerHeader}>
              <TextField
                fullWidth
                margin="normal"
                placeholder="Search chats..."
              />
            </div>
            <Divider />

            <List className={classes.ChatsList}>
              {chats.map((chat, index) => (
                <ListItem key={index} button>
                  <Avatar>{chat.title[0]}</Avatar>
                  <ListItemText primary={chat.title}/>
                </ListItem>
              ))};
            </List>

            <Button className={classes.addButton}
            variant="fab"
            aria-label="add"
            color='primary'>
              <AddIcon />
            </Button>
            <BottomNavigation showLabels>
              <BottomNavigationAction label="My Chats" icon={<RestoreIcon/>}/>
              <BottomNavigationAction label="Explore" icon={<ExploreIcon/>}/>
            </BottomNavigation>
          </Drawer>
          <main className={classes.Layout}>
          
          </main>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(PermanentDrawer);
