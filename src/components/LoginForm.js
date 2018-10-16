import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import LockIcon from '@material-ui/icons/Lock';


const styles = theme => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

});

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: {
        value: ''
      },
      username: {
        value: ''
      }
    }
  };
  handleInputChange = event => {
    event.persist();
    const {name, value} = event.target;
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      }
    }))
  };

  handleSubmit = event => {
    event.preventDefault();

    const {username, password} = this.state;

    this.props.onSubmit(username.value, password.value)
  };

  render() {
    const {classes} = this.props;
    const {username, password} = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <Paper className={classes.formWrapper}>
          <Typography variant="headline" component="h3">
            Login to our chat!
          </Typography>
          <Typography component="p">
            Use your username and password to log on.
          </Typography>
          <TextField
            required
            fullWidth
            name="username"
            onChange={this.handleInputChange}
            value={username.value}
            id="outlined-name"
            label="Username"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />

          <TextField
            required
            fullWidth
            id="outlined-password-input"
            label="Password"
            name="password"
            onChange={this.handleInputChange}
            value={password.value}
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
          />

          <Button variant="contained" color="primary" className={classes.button} type="submit">
            Login
            <LockIcon className={classes.rightIcon}/>
          </Button>
        </Paper>
      </form>
    )
  }
}




export default withStyles(styles)(LoginForm)
