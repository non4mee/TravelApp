import * as actionTypes from '../constants/actionTypes'
import _ from 'lodash'

const _initialState = {
  user: {},
  isSignout: false
}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.SAVE_USER:
      return {
        ...state,
        user: payload
      }
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        user: null
      }
    default:
      return state
  }
}
