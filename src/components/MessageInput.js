import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";

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

const MessageInput = ({classes}) => (
  <div className={classes.inputContainer}>
    <div className={classes.messageInputWrapper}>
      <Paper className={classes.input} elevation={6}>
        <Input fullWidth placeholder="Type your message…" />
      </Paper>
    </div>
  </div>
);

export default withStyles(styles)(MessageInput)
