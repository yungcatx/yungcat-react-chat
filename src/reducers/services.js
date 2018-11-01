import * as types from '../constants';
import {combineReducers} from 'redux';


const initialState = {
  isFetching: {
    signup: false,
    login: false,
    logout: false,
    recieveAuth: false,
    allChat: false,
    myChats: false,
    chat: false,
    createChat: false,
    joinChat: false,
    leaveChat: false,
    deleteChat: false,
    sockets: false,
    editUser: false,
  },
  errors: {
    auth: null,
    chat: null
  },
  isConnected: false,
};

export const isFetching = (state = initialState.isFetching , action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {...state, signup: true};
    case types.LOGIN_REQUEST:
      return {...state, login: true};
    case types.LOGOUT_REQUEST:
      return {...state, logout: true};
    case types.RECIEVE_AUTH_REQUEST:
      return {...state, recieveAuth: true};
    case types.FETCH_ALL_CHATS_REQUEST:
      return {...state, allChat: true};
    case types.FETCH_MY_CHATS_REQUEST:
      return {...state, myChats: true};
    case types.FETCH_CHAT_REQUEST:
      return {...state, chat: true};
    case types.CREATE_CHAT_REQUEST:
      return {...state, createChat: true};
    case types.JOIN_CHAT_REQUEST:
      return {...state, joinChat: true};
    case types.LEAVE_CHAT_REQUEST:
      return {...state, leaveChat: true};
    case types.DELETE_CHAT_REQUEST:
      return {...state, delete: true};
    case types.SOCKET_CONNECTION_REQUEST:
      return {...state, sockets: true};
    case types.EDIT_USER_REQUEST:
      return {...state, editUser: true};

    case types.SIGNUP_FAILURE:
    case types.SIGNUP_SUCCESS:
      return {...state, signup: false};
    case types.LOGIN_FAILURE:
    case types.LOGIN_SUCCESS:
      return {...state, login: false};
    case types.LOGOUT_FAILURE:
    case types.LOGOUT_SUCCESS:
      return {...state, logout: false};
    case types.RECIEVE_AUTH_FAILURE:
    case types.RECIEVE_AUTH_SUCCESS:
      return {...state, recieveAuth: false};
    case types.FETCH_ALL_CHATS_FAILURE:
    case types.FETCH_ALL_CHATS_SUCCESS:
      return {...state, allChat: false};
    case types.FETCH_MY_CHATS_FAILURE:
    case types.FETCH_MY_CHATS_SUCCESS:
      return {...state, myChats: false};
    case types.FETCH_CHAT_FAILURE:
    case types.FETCH_CHAT_SUCCESS:
      return {...state, chat: false};
    case types.CREATE_CHAT_FAILURE:
    case types.CREATE_CHAT_SUCCESS:
      return {...state, createChat: false};
    case types.JOIN_CHAT_FAILURE:
    case types.JOIN_CHAT_SUCCESS:
      return {...state, joinChat: false};
    case types.LEAVE_CHAT_FAILURE:
    case types.LEAVE_CHAT_SUCCESS:
      return {...state, leaveChat: false};
    case types.DELETE_CHAT_FAILURE:
    case types.DELETE_CHAT_SUCCESS:
      return {...state, delete: false};
    case types.SOCKET_CONNECTION_FAILURE:
    case types.SOCKET_CONNECTION_SUCCESS:
      return {...state, sockets: false};
    case types.EDIT_USER_FAILURE:
    case types.EDIT_USER_SUCCESS:
      return {...state, editUser: false};
    default:
      return state;
  }
};

const errors = (state=initialState.errors, action) => {
  switch (action.type) {
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
    // case types.RECIEVE_AUTH_FAILURE:
      return {...state, auth: action.payload};
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
    // case types.RECIEVE_AUTH_SUCCESS:
      return {...state, auth: null};
    case types.FETCH_ALL_CHATS_FAILURE:
    case types.FETCH_MY_CHATS_FAILURE:
    case types.FETCH_CHAT_FAILURE:
    case types.CREATE_CHAT_FAILURE:
    case types.JOIN_CHAT_FAILURE:
    case types.LEAVE_CHAT_FAILURE:
    case types.DELETE_CHAT_FAILURE:
    case types.SOCKET_CONNECTION_FAILURE:
    case types.EDIT_USER_FAILURE:
      return {...state, chat: action.payload};
    case types.FETCH_ALL_CHATS_SUCCESS:
    case types.FETCH_MY_CHATS_SUCCESS:
    case types.FETCH_CHAT_SUCCESS:
    case types.CREATE_CHAT_SUCCESS:
    case types.JOIN_CHAT_SUCCESS:
    case types.LEAVE_CHAT_SUCCESS:
    case types.DELETE_CHAT_SUCCESS:
    case types.SOCKET_CONNECTION_SUCCESS:
    case types.EDIT_USER_SUCCESS:
      return {...state, chat: null};
    default:
      return state;
  }
};

export const isConnected = (state=initialState.isConnected, action) => {
  switch (action.type) {
    case types.SOCKET_MISSING_CONNECTION:
    case types.SOCKET_CONNECTION_FAILURE:
      return false;
    case types.SOCKET_CONNECTION_SUCCESS:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  errors,
  isConnected
});

