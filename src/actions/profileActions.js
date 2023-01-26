import * as actionTypes from '../constants/actionTypes'

export function saveUser(payload) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.SAVE_USER,
      payload
    })
  }
}

export function signOut() {
  return function(dispatch) {
    dispatch({
      type: actionTypes.SIGN_OUT,
    })
  }
}
