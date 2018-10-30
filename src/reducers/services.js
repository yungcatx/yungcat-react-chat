// import * as types from '../constants';
// import {combineReducers} from 'redux';
//
//
// const initialState = {
//   isFetching: {
//     signup: false,
//     login: false,
//     logout: false,
//     recieveAuth: false,
//     allChat: false,
//     myChats: false,
//     chat: false,
//     createChat: false,
//     joinChat: false,
//     leaveChat: false,
//     deleteChat: false,
//     sockets: false,
//     editUser: false,
//
//   }
// };
//
// export const isFetching = (state = initialState.isFetching , action) => {
//   switch (action.type) {
//     case types.SIGNUP_REQUEST:
//       return state;
//     case types.LOGIN_REQUEST:
//       return state;
//     case types.LOGOUT_REQUEST:
//       return state;
//     case types.RECIEVE_AUTH_REQUEST:
//       return state;
//     case types.FETCH_ALL_CHATS_REQUEST:
//       return state;
//     case types.FETCH_MY_CHATS_REQUEST:
//       return state;
//     case types.FETCH_CHAT_REQUEST:
//       return state;
//     case types.CREATE_CHAT_REQUEST:
//       return state;
//     case types.JOIN_CHAT_REQUEST:
//       return state;
//     case types.LEAVE_CHAT_REQUEST:
//       return state;
//     case types.DELETE_CHAT_REQUEST:
//       return state;
//     case types.SOCKET_CONNECTION:
//       return state;
//     default:
//       return state;
//   }
// };
//
// export default combineReducers({
//   isFetching,
// });
