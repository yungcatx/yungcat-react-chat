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






class AddChatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      chat: {
        value: ''
      },
    };
  }
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
    const {chat} = this.state;
    console.log(chat.value);
    this.props.onSubmit(chat.value);
    this.setState({
      chat: {
        value: ''
      }
    })
  };

  handleClickOpen = () => {
    this.setState({ open: true })
  };
  handleClose = () => {
    this.setState({open: false})

  };



  render() {
    const {chat} = this.state;
    const {disabled} = this.props;

    return(
      <div>
        <IconButton color="primary" disabled={disabled} onClick={this.handleClickOpen}>
          <AddIcon />
        </IconButton>
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
              autoFocus
              name="chat"
              value={chat.value}
              margin="dense"
              label="Chat title"
              onChange={this.handleInputChange}
              type="title"
              autoComplete="current-title"
              fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary" type="submit">
                Add
              </Button>
            </DialogActions>
            </form>
          </Dialog>
      </div>
    )
  }
}


export default (AddChatButton);

