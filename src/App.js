import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import MainPage from './components/MainPage'
import WelcomePage from './components/WelcomePage'
import AuthPage from './components/AuthPage'

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
          <Route exact path="/auth" component={AuthPage}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
