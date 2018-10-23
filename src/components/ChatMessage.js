import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Avatar from './Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

import randomColor from '../utils/color-from';


const styles = theme => ({
  message: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  senderIsMe: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    alignItems: 'center',
  },
  messageStyle: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    maxWidth: "60%",
    minWidth: "10%"
  },
  myMessageStyle: {
    padding: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
    maxWidth: "60%",
    minWidth: "10%"
  },
  statusMessage: {
    width: '100%',
    textAlign: 'center',
  },
  statusMessageUser: {
    display: 'inline',
  }
});

const ChatMessage = ({classes, sender, content, activeUser, createdAt, statusMessage}) => {
  const isMessageFromMe = sender._id === activeUser._id;
  const displayedName = sender.username;
  const avatar = (
    <Avatar colorFrom={sender._id}>
      {displayedName}
    </Avatar>
  );

  if (statusMessage) {
    return (
      <div className={classes.statusMessage}>
        <Typography className={classes.statusMessage}>
          <Typography variant="caption" style={{ color: randomColor(sender._id)}} className={classes.statusMessageUser}>
            {displayedName}
          </Typography>
          {content}
          <Typography variant="caption" component="span">
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    )
  }
  return (
  <div
    className={
      isMessageFromMe ? classes.senderIsMe : classes.message
    }
  >
    {!isMessageFromMe && avatar}
    <Paper
      className={
        isMessageFromMe
          ? classes.myMessageStyle
          : classes.messageStyle
      }
    >
      <Typography variant="caption" style={{ color: randomColor(sender._id)}}>
        {displayedName}
      </Typography>
      <Typography variant="body1">
        {content}
      </Typography>
      <Typography variant="caption">
        {moment(createdAt).fromNow()}
      </Typography>
    </Paper>
    {isMessageFromMe && avatar}
  </div>
  );
  };

export default withStyles(styles)(ChatMessage)
