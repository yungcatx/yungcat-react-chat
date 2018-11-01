import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";

import connect from "react-redux/es/connect/connect";
import {compose, bindActionCreators} from "redux";

import {
  fetchAllChats, fetchMyChats, setActiveChat,
  logout, createChat, editUser,
  deleteChat, joinChat, leaveChat,
} from "../actions";
import {sendMessage, mountChat, unmountChat, socketsConnect} from "../actions/sockets";
import * as fromChats from '../reducers/chats';
import * as fromState from '../reducers';
import ChatList from './ChatList';
import DrawerHeader from './DrawerHeader';
import ChatAppBar from './AppBar';
import Chat from './Chat';
import ErrorMessage from './ErrorMessage'
import MessageInput from './MessageInput';


const styles = theme => ({
  grid: {
    display: "grid",
    gridTemplateRows: "auto 87vh auto",
    gridTemplateColumns: "1fr",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.background.orange,
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
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      searchValue: ''
    }

  };
  componentDidMount() {
    const {match, fetchAllChats, fetchMyChats, setActiveChat, socketsConnect, mountChat} = this.props;
    console.log('state', this.state.activeTab)
    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const{ chatId } = match.params;

        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId)
        }
      })
  };
  componentWillReceiveProps(nextProps) {
    const {match: {params}, setActiveChat, mountChat, unmountChat} = this.props;
    const {params: nextParams} = nextProps.match;

    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  };
  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value,
    })
  };
  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }
  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  };
  render() {
    const {
      classes, logout, chats, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser, error, isConnected
    } = this.props;

    return (
      <div className={classes.grid}>
        <div className={classes.headerContainer}>
          <DrawerHeader isConnected={isConnected} addChat={createChat} searchValue={this.state.searchValue} handleChange={this.handleSearchChange}/>
          <ChatAppBar logout={logout}
                      isConnected={isConnected}
                      editUser={editUser}
                      activeUser={activeUser}
                      activeChat={chats.active}
                      leaveChat={leaveChat}
                      deleteChat={deleteChat}
          />
        </div>

        <div className={classes.contentContainer}>
          <ChatList
            disabled={!isConnected}
            chats={this.filterChats(this.state.activeTab === 0 ? chats.my : chats.all)}
            activeChat={chats.active}/>
          <Chat messages={messages} activeUser={activeUser} activeChat={chats.active}/>
        </div>

        <div className={classes.footerContainer}>

          <BottomNavigation
            value={this.state.activeTab}
            onChange={this.handleTabChange}
            showLabels>
            <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
          </BottomNavigation>

          {chats.active && <MessageInput
            disabled={!isConnected}
            sendMessage={sendMessage}
            showJoinButton={!activeUser.isChatMember}
            onJoinButtonClick={() => joinChat(chats.active._id)}
            activeUser={activeUser}
          />}
        </div>
        <ErrorMessage error={error}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);

  return {
    isAuthenticated: state.auth.isAuthenticated,
    chats: {
      active: activeChat,
      my: fromChats.getByIds(state.chats, state.chats.myIds),
      all: fromChats.getByIds(state.chats, state.chats.allIds),
    },
    activeUser: {
      ...state.auth.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatMember: fromState.isChatMember(state, activeChat),
    },
    messages: state.messages,
    error: state.services.errors.chat,
    isConnected: state.services.isConnected,
  };
};


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  logout,
  createChat,
  deleteChat,
  joinChat,
  leaveChat,
  editUser,
  socketsConnect,
  sendMessage,
  mountChat,
  unmountChat
}, dispatch);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps)
)(MainPage);
