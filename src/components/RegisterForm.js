import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import EditIcon from '@material-ui/icons/Edit';
import Divider from "@material-ui/core/Divider";

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

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: {
        value: '',
        isValid: true
      },
      repeatedPassword : {
        value: '',
        isValid: true
      },
      username: {
        value: '',
        isValid: true
      }
    }
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
  };

  handleInputChange = event => {
    event.persist();
    const {name, value} = event.target;
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    const {username, password} = this.state;

    console.log('Register', username.value, password.value)
    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const {classes} = this.props;
    const {username, password, repeatedPassword} = this.state;
    return(

      <form onSubmit={this.handleSubmit}>
        <Paper className={classes.formWrapper}>
          <Typography variant="headline" component="h3">
            Sign up now!
          </Typography>
          <Typography component="p">
            Fill the form below to sign up.
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-name"
            label="Username"
            name="username"
            value={username.value}
            onChange={this.handleInputChange}
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
            className={classes.textField}
            type="password"
            value={password.value}
            onChange={this.handleInputChange}
            error={!password.isValid}
            autoComplete="new-password"
            margin="normal"
            variant="filled"
          />
          <TextField
            required
            fullWidth
            id="outlined-password-input"
            label="Repeat password"
            className={classes.textField}
            value={repeatedPassword.value}
            onChange={this.handleInputChange}
            error={!repeatedPassword.isValid}
            type="password"
            name="repeatedPassword"
            autoComplete="new-password"
            margin="normal"
            variant="filled"
          />
          <Button variant="contained" color="primary" className={classes.button} type="submit">
            Register
            <EditIcon className={classes.rightIcon}/>
          </Button>
        </Paper>
        <Divider />
      </form>
    );
  }
}




export default withStyles(styles)(RegisterForm)
