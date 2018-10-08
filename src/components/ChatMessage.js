import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Avatar from './Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  message: {
    justifySelf: "left",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: "60%",
    minWidth: "10%"
  },
  senderIsMe: {
    justifySelf: "right",
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    maxWidth: "60%",
    minWidth: "10%"
  },
  messageStyle: {
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2
  },
  myMessageStyle: {
    padding: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2
  },
});

const ChatMessage = ({classes, sender, content}) => (
  <div
    className={
      sender === "me" ? classes.senderIsMe : classes.message
    }
  >
    <Avatar colorFrom={sender}>
      {sender}
    </Avatar>
    <Paper
      className={
        sender === "me"
          ? classes.myMessageStyle
          : classes.messageStyle
      }
    >
      <Typography variant="caption">{sender}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Paper>
  </div>
);

export default withStyles(styles)(ChatMessage)
