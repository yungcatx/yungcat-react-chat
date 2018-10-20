import * as types from '../constants'
import history from '../utils/history'

export default function redirect(to) {
  return(dispatch) => {
    history.push(`${process.env.PUBLIC_URL}/${to}`);
    dispatch({
      type: types.REDIRECT,
      payload: {to}
    });
  }
}
