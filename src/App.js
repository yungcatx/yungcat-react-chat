import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import MainPage from './components/MainPage'
import WelcomePage from './components/WelcomePage'

const styles = theme => ({
  //
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/chat" component={MainPage} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
