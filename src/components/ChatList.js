import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ChatListItem from './ListItem'

const styles = theme => ({
  chatsListContainer: {
    gridArea: "chatlist",
    overflow: "auto"
  },
});

const ChatList = ({classes, chats}) => (
  <div className={classes.chatsListContainer}>
    <List>
      {chats && chats.map((chat, index) => (
        <ChatListItem key={index} {...chat} />
      ))}
    </List>
  </div>
);


export default withStyles(styles)(ChatList)
