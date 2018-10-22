import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import EditUserDialog from './EditUserDialog'
import ProfileIcon from '@material-ui/icons/VerifiedUserRounded'

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
    const {logout, editUser, activeUser} = this.props;

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
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

export default SimpleMenu;
