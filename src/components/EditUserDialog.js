import Button from '@material-ui/core/Button';
import React from "react";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";


class EditUserDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      firstName: '',
      lastName: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.editUser({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.handleClose();
  };

  handleClickOpen = () => {
    this.setState({ open: true })
  };
  handleClose = () => {
    this.setState({ open: null });
  };

  render() {
    return(
      <React.Fragment>
        <MenuItem onClick={this.handleClickOpen}>Profile</MenuItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title">
              Edit your profile
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To edit your profile fill up fields below
              </DialogContentText>
              <TextField
                required
                fullWidth
                name="username"
                label="Username"
                placeholder="Enter you username..."
                type="text"
                margin="normal"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <TextField
                fullWidth
                name="firstName"
                label="First name"
                placeholder="Enter you first name..."
                type="text"
                margin="normal"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              <TextField
                fullWidth
                name="lastName"
                label="Last name"
                placeholder="Enter you last name..."
                type="text"
                margin="normal"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" type="submit">
                Save
              </Button>
              <Button>
                Close
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default (EditUserDialog);
