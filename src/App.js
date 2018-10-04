import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';

import {chats, messages} from './mock-data'


const styles = theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
    gridTemplateAreas: `
                    'header appbar'
                    'chatlist chatlayout'
                    'bottomnavigation input'
    `,
    backgroundColor: theme.palette.background.default,

    "& div:nth-child(even)": {
      // backgroundColor: "red",
    },
    "& div:nth-child(odd)": {
      // backgroundColor: "green",
    },


  },
  drawerContainer: {
    gridArea: 'header',
    height: '100%',
    width: '320px',
  },
  appBarContainer: {
    gridArea: 'appbar',

  },
  chatsListContainer: {
    gridArea: 'chatlist',
    width: '320px',
    height: '100%',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
  },
  chatLayoutContainer: {
    gridArea: 'chatlayout',
    display: 'grid',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  message: {
    justifySelf: 'left',
    maxWidth: '70%',
    minWidth: '10%',

  },
  senderIsMe: {
    justifySelf: 'right',
    maxWidth: '70%',
    minWidth: '10%',

  },
  bottomNavigationContainer: {
    gridArea: 'bottomnavigation',
    position: 'fixed',
    bottom: 0
  },
  inputContainer: {
    gridArea: 'input',
    position: 'fixed',
    bottom: 0
  },
  AppBar: {
    width: `calc(100% - 320px)`,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  bottomNav: {
    width: '320px'
  },
  messageStyle: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  myMessageStyle: {
    padding: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
  }
});

class App extends React.Component {

  render() {
    const {classes} = this.props;
    const chatLists = chats.map((chat, index) => (
      <ListItem key={index} button>
        <Avatar>{chat.title && chat.title[0]}</Avatar>
        <ListItemText primary={chat.title}/>
      </ListItem>
    ));
    const messageLists = messages && messages.map((message, index) => (
      <div key={index} className={(message.sender === 'me' ? classes.senderIsMe : classes.message)}>
        <Paper className={(message.sender === 'me' ? classes.myMessageStyle : classes.messageStyle)}>
          <Typography variant="caption">
            {message.sender}
          </Typography>
          <Typography variant="body1">
            {message.content}
          </Typography>
        </Paper>
      </div>
    ));

    return (
      <div className={classes.grid}>
        <div className={classes.drawerContainer}>
          <div className={classes.drawerHeader}>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
          <Divider/>
        </div>
        <div className={classes.appBarContainer}>
          <AppBar
            position="absolute" className={classes.AppBar}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Yungcat React Chat
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.chatsListContainer}>
          <List className={classes.chatsList}>
            {chatLists}
          </List>
        </div>
        <div className={classes.chatLayoutContainer}>
          {messageLists}
        </div>
        <div className={classes.bottomNavigationContainer}>
          <BottomNavigation showLabels className={classes.bottomNav}>
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Explore" icon={<ExploreIcon/>}/>
          </BottomNavigation>
        </div>
        <div className={classes.inputContainer}>
          input
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
