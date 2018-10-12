import {
  SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'
import {axios} from 'axios';


export function login(username, password){
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    })


  };
};

export function signUp(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    })
    axios.post('http://localhost:8000/v1/signup', {
      username: username,
      password: password
    })
      .then(response => response.json())
      .then(function (data) {
        console.log(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  };
};

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  };
};
