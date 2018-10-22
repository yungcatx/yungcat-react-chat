import * as types from '../constants/chats';
import * as messageTypes from '../constants/messages'

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case messageTypes.SEND_MESSAGE_SUCCESS:
      return [...state, action.payload.message];
    case types.FETCH_CHAT_SUCCESS:
      return action.payload.chat.messages;
    default:
      return state;
  }
}
