import React from "react";
import {withStyles} from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';

import SimpleHeader from './SimpleHeader'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import {bindActionCreators, compose} from "redux";
import {login, signUp, receiveAuth} from "../actions";
import connect from "react-redux/es/connect/connect";
import ErrorMessage from "./ErrorMessage";


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
  componentDidMount() {
    this.props.receiveAuth()
  }

  render() {
    const {classes, signUp, login, isAuthenticated, error} = this.props;
    if (isAuthenticated) {
      return (
        <Redirect to="/chat"/>
      );
    }

    return (
      <div className={classes.grid}>
        <div className={classes.header}>
          <SimpleHeader/>
        </div>
        <div className={classes.content}>
          <div className={classes.formContainer}>
            <div className={classes.signUpFormContainer}>
              <RegisterForm onSubmit={signUp}/>
            </div>
            <div>

            </div>
            <div className={classes.signInFormContainer}>
              <LoginForm onSubmit={login}/>
            </div>
            <ErrorMessage error={error}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signUp,
  login,
  receiveAuth
}, dispatch);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps)
  )(AuthPage);
