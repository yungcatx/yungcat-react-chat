import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar'
import UserMenu from './UserMenu'
import ChatMenu from './ChatMenu'


const styles = theme => ({
  appBarContainer: {
    gridArea: "appbar",
    display: 'grid'
  },
  appBar: {
    width: `calc(100% - 320px)`
  },
  toolBarLayout: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },


});

const ChatAppBar = ({classes, logout, activeChat, activeUser, editUser, leaveChat, deleteChat, isConnected}) => (
  <div className={classes.appBarContainer}>
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar className={classes.toolBarLayout}>
      {activeChat ? (<div className={classes.toolBarLayout}>
          <Avatar colorFrom={activeChat._id}>
            {activeChat.title}
          </Avatar>
          &ensp;
          <Typography variant="title" color="inherit">
            {activeChat.title}
            <ChatMenu
              disabled={!isConnected}
              activeUser={activeUser}
              onLeaveClick={() => leaveChat(activeChat._id)}
              onDeleteClick={() => deleteChat(activeChat._id)}
            />
          </Typography>
        </div>) :
        ( <Typography variant="title" color="inherit" noWrap>
          Yungcat React Chat
        </Typography>
        )}
      <UserMenu
        disabled={!isConnected}
        logout={logout}
        editUser={editUser}
        activeUser={activeUser}
        className={classes.menuItem}
      />
    </Toolbar>
  </AppBar>
  </div>
);

export default withStyles(styles)(ChatAppBar)
