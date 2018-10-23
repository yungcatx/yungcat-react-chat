import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import AddChatButton from './AddChatButton'
import {compose} from 'redux';


const styles = theme => ({
  drawerContainer: {
    gridArea: "drawerHeader",
  },
  drawerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
  },
});

class DrawerHeader extends React.Component {

  render () {
    const {classes, addChat, searchValue, handleChange} = this.props;
    return (
      <div className={classes.drawerContainer}>
        <div className={classes.drawerHeader}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Search chats..."
            value={searchValue}
            onChange={handleChange}
          />
          <AddChatButton onSubmit={addChat}/>
          <Divider/>
        </div>
      </div>
    )
  };

}


export default compose(withStyles(styles)(DrawerHeader))
