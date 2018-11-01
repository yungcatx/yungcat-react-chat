import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles'

import EditUserDialog from './EditUserDialog'
import ProfileIcon from '@material-ui/icons/AccountBox'

const styles = theme => ({
  menuItem: {
    marginLeft: 'auto'
  }
})


class SimpleMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      anchorEl: null
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {classes, logout, editUser, activeUser, disabled} = this.props;

    return (
      <div className={classes.menuItem}>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
          disabled={disabled}
        >
          <ProfileIcon/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <EditUserDialog activeUser={activeUser} editUser={editUser}/>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
