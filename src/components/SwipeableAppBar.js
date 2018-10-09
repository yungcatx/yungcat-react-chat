import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  //
});

class SwipeableAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {classes} = this.props;

    return (
      <AppBar position="static" color="default">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Sign Up" component={Link}
               to="/register"/>
          <Tab label="Sign In" component={Link}
               to="/login"/>
        </Tabs>
      </AppBar>
    )
  }
}


export default withStyles(styles)(SwipeableAppBar)

