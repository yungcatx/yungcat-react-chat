import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon'
import blueGrey from 'material-ui/colors/blueGrey';


import ChatIcon from '@material-ui/icons/Chat';


const styles = theme => ({
  grid: {
    display: 'grid',
    gridTemplateRows: "10% 1fr 1fr",
    gridTemplateColumns: "1fr",
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    gridTemplateAreas: `
      'header'
      'content'
      'footer'   
    `
  },
  header: {
    display: 'grid',
    gridArea: 'header',
  },
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '10px',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  content: {
    display: 'grid',
    gridArea: 'content',
  },
  footer: {
    display: 'grid',
    gridArea: 'footer',
  }
});

class WelcomePage extends React.Component {
  render() {
    const {classes} = this.props;

    return(
      <div className={classes.grid}>
        <div className={classes.header}>
          <AppBar position="static" color="primary" className={classes.headerLayout}>
            <Icon>
              <ChatIcon />
            </Icon>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Yungcat React Chat
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.content}>
          <div>
            <h1>Welcome!</h1>
          </div>
        </div>
        <div className={classes.footer}>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage)
