import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

import ChatMessage from './ChatMessage'

const styles = theme => ({
  chatLayoutContainer: {
    gridArea: "chatlayout",
    display: "grid",
    paddingTop: "10px",
    paddingBottom: "10px",
    gridGap: '10px',
    overflow: "auto"
  },
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
    const {classes, messages} = this.props;

    return (
      <div className={classes.chatLayoutContainer} ref="chatLayout">
        {messages && messages.map((message, index) =>
          <ChatMessage key={index} sender={message.sender} content={message.content}/>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Chat)
