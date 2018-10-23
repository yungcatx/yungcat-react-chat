import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ChatMessage from './ChatMessage'

const styles = theme => ({
  chatLayoutContainer: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    width: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'grid',
  },
  paperLayout: {
    alignSelf: 'center',
    justifySelf: 'center'
  }
});

class Chat extends Component {
  componentDidMount() {
    this.scrollDownHistory()
  }

  componentDidUpdate() {
    this.scrollDownHistory()
  }

  scrollDownHistory() {
    const chatLayout = this.refs.chatLayout;
    if (chatLayout) {
      chatLayout.scrollTop = chatLayout.scrollHeight
    }
  }

  render() {
    const { classes, messages , activeChat, activeUser} = this.props;


    if (!activeChat) {
      return (
        <div className={classes.paperLayout}>
          <Paper className={classes.paperRoot} elevation={1}>
            <Typography variant="h5" component="h3" style={{justifySelf: 'center'}}>
              To start messaging
            </Typography>
            <Typography component="p" style={{justifySelf: 'center'}}>
              Create a chat or press <strong>"Explore"</strong>
            </Typography>
          </Paper>
        </div>
      );
    }

    return messages && messages.length ? (
      <div className={classes.chatLayoutContainer} ref="chatLayout">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            activeUser={activeUser}
            {...message}
          />
        ))}
      </div>
    ) : (
      <Typography variant="display1" className={classes.paperLayout}>
        There is no messages yet...
      </Typography>
    );
  }
}

export default withStyles(styles)(Chat)
