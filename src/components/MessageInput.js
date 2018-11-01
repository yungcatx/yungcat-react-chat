import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  inputContainer: {
    gridArea: "input",
  },
  messageInputWrapper: {
    width: `100%`,
  },
  input: {
    padding: theme.spacing.unit * 2,
  },
});

class MessageInput extends React.Component {
  state = {
    value: '',
  }

  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyPress = (event) => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  }

  render() {
    const { classes, showJoinButton, onJoinButtonClick, disabled } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.input} elevation={6}>
          {showJoinButton ? (
            <Button
              fullWidth
              variant="raised"
              color="primary"
              disabled={disabled}
              onClick={onJoinButtonClick}
            >
              Join
            </Button>
          ) : (
            <Input
              fullWidth
              placeholder="Type your message…"
              disabled={disabled}
              value={this.state.value}
              onChange={this.handleValueChange}
              onKeyPress={this.handleKeyPress}
            />
          )}
        </Paper>
      </div>
    );

  }
}

export default withStyles(styles)(MessageInput)
