import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import MainPage from './components/MainPage'
import WelcomePage from './components/WelcomePage'
import AuthPage from './components/AuthPage'
import configureStore from './store'

const styles = theme => ({
  //
});

const store = configureStore();

class App extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route exact path="/chat" component={MainPage} />
            <Route exact path="/auth" component={AuthPage}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
