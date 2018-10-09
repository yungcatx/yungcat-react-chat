import React from "react";
import {withStyles} from '@material-ui/core/styles';

import SwipeableAppBar from './SwipeableAppBar'
import SimpleHeader from './SimpleHeader'
import LoginForm from './LoginForm'

const styles = theme => ({
  grid: {
    display: 'grid',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    gridTemplateColumns: '1fr',
    gridTemplateRows: "20% 80%",
    gridTemplateAreas: `
            'header'
            'content'
    `,
  },
  header: {
    display: 'grid',
    gridArea: 'header'
  },
  content: {
    display: 'grid',
    gridArea: 'content',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    position: 'fixed',
    gridTemplateAreas: `
            '. . .'
          '. form .'
            '. . .'
    `,

  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gridArea: 'form',
    alignSelf: 'center',
    alignContent: 'center'
  },
});


class SignUpInPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.grid}>
        <div className={classes.header}>
          <SimpleHeader />
        </div>
        <div className={classes.content}>
          <div className={classes.formContainer}>
            <SwipeableAppBar/>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SignUpInPage)
