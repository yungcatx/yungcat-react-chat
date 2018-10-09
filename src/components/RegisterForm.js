import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

});

const RegisterForm = ({classes}) => (
  <div className={classes.formWrapper}>

    <TextField
      id="outlined-name"
      label="Username"
      className={classes.textField}
      margin="normal"
      variant="outlined"
    />

    <TextField
      id="outlined-password-input"
      label="Password"
      className={classes.textField}
      type="password"
      autoComplete="current-password"
      margin="normal"
      variant="outlined"
    />
    <TextField
      id="outlined-password-input"
      label="Repeat password"
      className={classes.textField}
      type="password"
      autoComplete="current-password"
      margin="normal"
      variant="outlined"
    />


  </div>
);


export default withStyles(styles)(RegisterForm)
