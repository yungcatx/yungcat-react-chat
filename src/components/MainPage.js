import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatList from './ChatList';
import DrawerHeader from './DrawerHeader';
import ChatAppBar from './AppBar';
import Chat from './Chat';
import BottomNav from './BottomNavigation';
import MessageInput from './MessageInput';

import { chats, messages } from "../mock-data";
import connect from "react-redux/es/connect/connect";
import {compose} from "redux";

const styles = theme => ({
  grid: {
    display: "grid",
    gridTemplateRows: "auto 87vh auto",
    gridTemplateColumns: "1fr",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    gridTemplateAreas: `
            'header'
            'content'
            'footer'
    `
  },

  headerContainer: {
    display: "grid",
    gridArea: "header",
    height: "100%",
    gridTemplateColumns: "320px auto",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
             'drawerHeader button appbar'
    `
  },
  contentContainer: {
    display: "grid",
    gridArea: "content",
    gridTemplateColumns: "320px auto",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
            'chatlist chatlayout'
    `
  },
  footerContainer: {
    display: "grid",
    gridArea: "footer",
    width: "calc(100%-320px)",
    gridTemplateColumns: "320px auto",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
            'bottomnavigation input'
    `
  },
});

class MainPage extends Component {
  render() {
    const { classes } = this.props;
    return (

      <div className={classes.grid}>
        <div className={classes.headerContainer}>
          <DrawerHeader />
          <ChatAppBar/>
        </div>

        <div className={classes.contentContainer}>
          <ChatList chats={chats}/>
          <Chat messages={messages}/>
        </div>

        <div className={classes.footerContainer}>
          <BottomNav />
          <MessageInput/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //
});


const mapDispatchToProps = dispatch => ({
  //
});

export default compose(
  withStyles(styles),
    connect(
    mapStateToProps,
    mapDispatchToProps)
  )(MainPage);
