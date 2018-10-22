import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from './Avatar'
import UserMenu from './UserMenu'
import ChatMenu from './ChatMenu'

import LogoutIcon from '@material-ui/icons/ExitToApp'

const styles = theme => ({
  appBarContainer: {
    gridArea: "appbar"
  },
  appBar: {
    width: `calc(100% - 320px)`
  },
});

const ChatAppBar = ({classes, logout, activeChat, activeUser, editUser, leaveChat, deleteChat}) => (
  <div className={classes.appBarContainer}>
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      {activeChat ? (<React.Fragment>
          <Avatar colorFrom={activeChat._id}>
            {activeChat.title}
          </Avatar>
          <Typography variant="title" className={classes.appBarTitle}>
            {activeChat.title}
            <ChatMenu
              activeUser={activeUser}
              onLeaveClick={() => leaveChat(activeChat._id)}
              onDeleteClick={() => deleteChat(activeChat._id)}
            />
          </Typography>
        </React.Fragment>) :
        ( <Typography variant="title" color="inherit" noWrap>
          Yungcat React Chat
        </Typography>
        )}
      <UserMenu
        logout={logout}
        editUser={editUser}
        activeUser={activeUser}/>
    </Toolbar>
  </AppBar>
  </div>
);

export default withStyles(styles)(ChatAppBar)
