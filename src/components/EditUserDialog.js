import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from '@material-ui/core/Button';
import React from "react";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";






class EditUserDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      firstName: '',
      lastName: '',
    };
    const {editUser} = this.props;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName,
    })
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const {username, firstName, lastName} = this.state;
    console.log(this.state);

    this.props.onSubmit(username.value, firstName.value, lastName.value);
  };
  handleClickOpen = () => {
    this.setState({ open: true })
  };
  handleClose = () => {
    this.setState({ open: null });
  };
  handleSaveClick = () => {
    this.props.editUser({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.handleClose();
  };


  render() {
    const {username, firstName, lastName} = this.state;

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
              Add a new chat
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add a new chat enter the chat title.
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
              <Button color="primary" onClick={this.handleSaveClick}>
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
