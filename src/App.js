import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MainPage from './components/MainPage'

const styles = theme => ({
  //
});

class App extends React.Component {
  render() {
    return (
      <MainPage/>
    );
  }
}

export default withStyles(styles)(App);
