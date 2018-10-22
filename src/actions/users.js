import * as types from '../constants/users'
import callApi from '../utils/call-api'


export function editUser(username, firstName, lastName) {
  return (dispatch, getState) => {
    const {token} = getState().auth;

    dispatch({
      type: types.EDIT_USER_REQUEST
    });
    return callApi('users/me', token, {method: 'POST'}, {'data': {username, firstName, lastName}})
      .then(data => dispatch({
        type: types.EDIT_USER_SUCCESS,
        payload: data
      }))
      .catch(reason => dispatch({
        type: types.EDIT_USER_FAILURE,
        payload: reason
      }))
  }
}



