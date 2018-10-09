import React from "react";
import {withStyles} from '@material-ui/core/styles';

import SimpleHeader from './SimpleHeader'
import SwipeableAppBar from './SwipeableAppBar'


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
    gridTemplateAreas: `
            '. . .'
          '. form .'
            '. . .'
    `,

  },
  formContainer: {
    gridArea: 'form',
    alignSelf: 'center',
    alignContent: 'center'
  },
});


class AuthPage extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.grid}>
        <div className={classes.header}>
          <SimpleHeader />
        </div>
        <div className={classes.content}>
          <div className={classes.formContainer}>
            <SwipeableAppBar />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AuthPage)
