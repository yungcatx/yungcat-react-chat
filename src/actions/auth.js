import {
  SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'
import {axios} from 'axios';

export function signUp(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    return axios.post('http://localhost:8000/v1/signup', {
      username: username,
      password: password
    })
      .then(response => dispatch({
        type: SIGNUP_SUCCESS,
        payload: response
      }))
      .catch(reason => dispatch({
        type: SIGNUP_FAILURE,
        payload: reason
      }))

  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    return axios.post('http://localhost:8000/v1/login', {
      username: username,
      password: password
    })
      .then(response => dispatch({
        type: LOGIN_SUCCESS,
        payload: response
      }))
      .catch(reason => dispatch({
        type: LOGIN_FAILURE,
        payload: reason
      }))

  };
}


export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  };
};
