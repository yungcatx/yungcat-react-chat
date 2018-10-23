import React from "react";
import {Provider} from 'react-redux';
import {Router, Route, Switch, Redirect} from 'react-router-dom'
import MainPage from './components/MainPage'
import WelcomePage from './components/WelcomePage'
import AuthPage from './components/AuthPage'
import PrivateRoute from './components/PrivateRoute'
import configureStore from './store'
import history from './utils/history'



const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
          <Switch>
            <Route exact path="/(welcome)?" component={WelcomePage} />
            <PrivateRoute exact path="/chat/:chatId?" component={MainPage} />
            <Route exact path="/auth" component={AuthPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default (App);
