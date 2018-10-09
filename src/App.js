import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import MainPage from './components/MainPage'
import WelcomePage from './components/WelcomePage'
import SignUpPage from './components/SignUpPage'
import SignInPage from './components/SignInPage'

const styles = theme => ({
  //
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/chat" component={MainPage} />
          <Route exact path="/register" component={SignUpPage}/>
          <Route exact path="/login" component={SignInPage}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
