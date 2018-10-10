import React from "react";
import {withStyles} from '@material-ui/core/styles';

import SimpleHeader from './SimpleHeader'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'


const styles = theme => ({
  grid: {
    display: 'grid',
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    gridTemplateColumns: '1fr',
    gridTemplateRows: "auto 87vh",
    gridTemplateAreas: `
            'header'
            'content'
    `,
  },
  header: {
    gridArea: 'header'
  },
  content: {
    display: 'grid',
    gridArea: 'content',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 100vh 1fr',
    gridTemplateAreas: `
            '. . .'
            '. form .'
            '. . .'
    `,

  },
  formContainer: {
    gridArea: 'form',
    display: 'grid',
    gridGap: '200px',
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'auto 320px auto 320px auto',
    gridTemplateAreas: `
             '. signup . signin .'
    `,
  },
  signUpFormContainer: {
    gridArea: 'signup',
    alignSelf: 'center',
  },
  signInFormContainer: {
    gridArea: 'signin',
    alignSelf: 'center'
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
            <div className={classes.signUpFormContainer}>
              <RegisterForm />
            </div>
            <div className={classes.headerDivider}>

            </div>
            <div className={classes.signInFormContainer}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(AuthPage)
